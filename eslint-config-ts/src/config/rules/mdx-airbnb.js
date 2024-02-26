const { OFF, ERROR } = require('../../constants/severity')

const rules = {
  // modules
  'import/extensions': OFF,
  'import/prefer-default-export': OFF,
  'import/no-extraneous-dependencies': OFF,
  // format
  'react/jsx-indent': OFF,
  'max-len': OFF,
  'react/no-unescaped-entities': OFF,
  // typescript
  '@typescript-eslint/no-unused-vars': ERROR,
  '@typescript-eslint/explicit-module-boundary-types': OFF,
  // react
  'react/prop-types': OFF,
}

module.exports = rules
