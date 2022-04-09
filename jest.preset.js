const nxPreset = require('@nrwl/jest/preset');

// Some tests use hirez_io's Jest spy, which uses RxJS internals.
const esModules = ['lodash-es', '@hirez_io', 'rxjs'].join('|');

module.exports = {
  ...nxPreset,
  // https://github.com/nrwl/nx/issues/812
  moduleNameMapper: {
    '^lodash-es$': 'lodash'
  },
  // Avoid finding Cypress tests:
  testPathIgnorePatterns: ['/cypress/'],
  // Transform (compile) ES5 code for Jest module use. This relies on
  // the allowJs settings in the tsconfig, so that we can rely on
  // TypeScript for transformation, rather than also adding Babel.
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`]
};
