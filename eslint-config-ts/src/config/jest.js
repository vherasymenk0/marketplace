const { OFF } = require('../constants/severity')

const overrides = {
  files: ['**/*.test.{ts,tsx}', '**/test/**/*'],
  plugins: ['jest'],
  extends: ['plugin:jest/recommended'],
  rules: {
    'import/no-extraneous-dependencies': OFF,
  },
  env: {
    'jest/globals': true,
  },
}

module.exports = overrides
