const fs = require('fs');

const command = process.argv[2];
let id = process.argv[3];
const rest = [...process.argv.slice(4)];

if (!command || !id) {
  console.error('Must supply command and example number');
}

const startsWithDigit = /^\d/;
if (startsWithDigit.test(id)) {
  id = 'abc' + id; // Default prefix = abc
}

const angularJson = JSON.parse(fs.readFileSync('workspace.json'));
const projectNames = Object.keys(angularJson.projects);

let suffixFilter = name => !name.endsWith('-e2e');

if (command == 'e2e') {
  suffixFilter = name => name.endsWith('-e2e');
}

const matchingNames = projectNames.filter(
  name => name.startsWith(id + '-') && suffixFilter(name)
);

if (matchingNames.length === 1) {
  const cmd = [command, `--project=${matchingNames[0]}`, ...rest];
  console.log(['>>>>>>>>>', 'ng', ...cmd].join(' '));
  if (rest.includes('--dry-run')) {
    process.exit(0);
  }
  process.argv = [
    process.argv[0],
    '../node_modules/@angular/cli/bin/ng',
    ...cmd
  ];
  require('../node_modules/@angular/cli/bin/ng');
} else {
  console.error('cannot find', id);
  console.table(matchingNames);
  process.exit(1);
}
