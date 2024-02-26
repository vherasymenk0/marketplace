const { OFF } = require('../constants/severity')

const overrides = {
  files: ['**/docs/**/*'],
  rules: {
    'import/no-extraneous-dependencies': OFF,
    '@typescript-eslint/explicit-module-boundary-types': OFF,
  },
}

module.exports = overrides
