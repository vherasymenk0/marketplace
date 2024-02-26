const { ERROR, OFF, WARN } = require('../../constants/severity')

const restrictedImports = require('./_restricted-imports')

const rules = {
  // modules
  ...restrictedImports,
  'import/prefer-default-export': OFF,
  'import/no-useless-path-segments': ERROR,
  'import/no-default-export': WARN,
  'import/s': OFF,
  // format
  'prettier/prettier': [
    ERROR,
    {
      tabWidth: 2,
      useTabs: false,
      semi: false,
      singleQuote: true,
      trailingComma: 'all',
    },
  ],
  'max-len': [
    ERROR,
    {
      tabWidth: 2,
      code: 100,
      ignoreComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    },
  ],
  // security
  'security/detect-object-injection': OFF,
  'security/detect-possible-timing-attacks': OFF,
  // other
  'no-console': [ERROR, { allow: ['info', 'warn', 'error'] }],
  'prefer-destructuring': [
    ERROR,
    {
      object: true,
      array: false,
    },
  ],
  'no-loops/no-loops': ERROR,
  'prefer-arrow-functions/prefer-arrow-functions': [
    ERROR,
    {
      classPropertiesAllowed: false,
      disallowPrototype: false,
      returnStyle: 'unchanged',
      singleReturnOnly: false,
    },
  ],
}

module.exports = rules
