const { OFF, ERROR } = require('../../constants/severity')

const rules = {
  // modules
  'import/no-unresolved': OFF,
  // format
  'object-curly-newline': OFF,
  'no-confusing-arrow': OFF,
  'implicit-arrow-linebreak': OFF,
  'lines-between-class-members': OFF,
  'max-params': [ERROR, { max: 3 }],
}

module.exports = rules
