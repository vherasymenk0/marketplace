const { ERROR, OFF } = require('../constants/severity')

const reactRules = require('./rules/react')

const overrides = {
  files: ['*.tsx'],
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  extends: [
    // order matters: airbnb first (strict) and standards next
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  rules: {
    ...reactRules,
    // modules
    'react/jsx-filename-extension': [ERROR, { extensions: ['.tsx'] }],
    'react/react-in-jsx-scope': OFF,
    'react/function-component-definition': [ERROR, { namedComponents: 'arrow-function' }],
  },
}

module.exports = overrides
