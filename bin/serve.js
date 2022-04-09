// Our special "ng serve" substitute.

const { Observable } = require('rxjs');
const {
  filter,
  mapTo,
  groupBy,
  mergeMap,
  debounceTime
} = require('rxjs/operators');

const FiveServer = require('five-server').default;
const chokidar = require('chokidar');
const { spawn } = require('child_process');
const path = require('path');
const fg = require('fast-glob');
const fs = require('fs');
const BetterQueue = require('better-queue');

// Config ref data

const workspaceJson = JSON.parse(fs.readFileSync('workspace.json'));
const projectNames = Object.keys(workspaceJson.projects);
const prefix = process.argv[2] || '';

// Auto build

const workQueue = new BetterQueue(buildProject, {
  concurrent: 1,
  filo: true,
  cancelIfRunning: true
});

workQueue.on('drain', () =>
  console.log('All builds complete, awaiting next change')
);

async function enqueueUnBuilt() {
  const distNames = await fg(['*'], {
    cwd: 'dist',
    onlyDirectories: true
  });

  const unBuilt = projectNames
    .filter(name => distNames.indexOf(name) < 0)
    .filter(name => name.startsWith(prefix))
    .filter(name => name != 'server')
    .filter(name => {
      let project = workspaceJson.projects[name];
      if (typeof project === 'string') {
        // New workspace, separate configurations
        project = JSON.parse(
          fs.readFileSync(project + '/project.json')
        );
      }
      // Only buildable projects
      return !!project.architect?.build || !!project.targets?.build;
    });

  unBuilt.sort();
  unBuilt.reverse();
  console.log('Un-built projects need to be built:', unBuilt.length);

  workQueue.pause();
  unBuilt.forEach((projectName, i) =>
    workQueue.push({ id: projectName, initial: true })
  );
  workQueue.resume();
}

function projectForChangedFile(filePath) {
  const normalizedFilePath = path.normalize(filePath);

  for (projectName of projectNames) {
    const normalizedRoot = path.normalize(
      workspaceJson.projects[projectName].root
    );
    if (normalizedFilePath.startsWith(normalizedRoot)) {
      return projectName;
    }
  }
  return '';
}

function rebuildOnChange() {
  const changes = Observable.create(function (observer) {
    const watcher = chokidar.watch('./projects');
    watcher.on('all', (event, filePath) =>
      observer.next({ event, filePath })
    );
    return () => watcher.unwatch();
  });

  changes
    .pipe(
      filter(({ event }) => event === 'change'),
      groupBy(({ filePath }) => projectForChangedFile(filePath)),
      mergeMap(projectChanges$ =>
        projectChanges$.pipe(
          debounceTime(1000),
          mapTo(projectChanges$.key)
        )
      )
    )
    .subscribe(projectName => {
      console.log('Change detected on project: ' + projectName);
      workQueue.cancel(projectName);
      workQueue.push({ id: projectName });
    });
}

function buildProject(task, completedCallback) {
  const projectName = task.id;
  console.log(projectName, 'Building');
  console.time(projectName);
  const builder = spawn(
    'node',
    [
      './node_modules/@angular/cli/bin/ng',
      'build',
      projectName,
      `--baseHref=/${projectName}/`,
      '--deleteOutputPath=false',
      '--configuration=development'
    ],
    {
      cwd: process.cwd()
    }
  );

  builder.stdout.on('data', data => {
    // console.log(data.toString());
  });

  builder.stderr.on('data', data => {
    console.error(projectName, data.toString());
  });

  builder.on('close', code => {
    if (code) {
      console.error('BUILD FAILED!', code);
    } else {
      console.timeEnd(projectName);
    }
    completedCallback();
  });

  return {
    cancel: function () {
      console.log('stopping build in progress');
      builder.kill('SIGINT'); // control C
    }
  };
}

// Serve files

function startLiveServer() {
  const port = 8080;
  new FiveServer().start({
    port,
    root: 'dist',
    open: false,
    noCssInject: true,
    wait: 300,
    logLevel: 0,
    mount: {
      '/favicon.ico': path.resolve(process.cwd(), 'bin/favicon.ico')
    },
    proxy: { '/api': 'http://localhost:8085' }
  });
  console.log('Development web server listening on port', port);
  console.log();
}

startLiveServer();
enqueueUnBuilt();
rebuildOnChange();

// TODO: the old OD fork of live-server had an enhancement to only reload
// if the specific example was edited. Reimplement that on
// Five-server (with a fork or patch).
