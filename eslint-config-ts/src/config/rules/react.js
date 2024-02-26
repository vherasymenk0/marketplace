const { OFF, ERROR } = require('../../constants/severity')

const rules = {
  'react/prop-types': OFF,
  'react/jsx-props-no-spreading': [ERROR, { custom: 'ignore' }],
  'react/require-default-props': OFF,
  'react/display-name': OFF,
  'react/jsx-no-duplicate-props': [ERROR, { ignoreCase: false }],
  'react/jsx-no-useless-fragment': OFF,
  'react/boolean-prop-naming': [ERROR, { rule: '^is[A-Z]([A-Za-z0-9]?)+' }],
  'react/destructuring-assignment': [ERROR, 'always'],
  'react/hook-use-state': ERROR,
  'react/jsx-no-leaked-render': [ERROR, { validStrategies: ['ternary', 'coerce'] }],
  'react/no-object-type-as-default-prop': ERROR,
}

module.exports = rules
