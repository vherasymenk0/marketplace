const importOrderRules = require('./rules/_import-order')
const typescriptRulesAirbnb = require('./rules/typescript-airbnb')
const typescriptRules = require('./rules/typescript')
const { ERROR, OFF } = require('../constants/severity')

const overrides = {
  files: ['*.ts', '*.tsx'],
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
    },
  },
  rules: {
    ...importOrderRules,
    ...typescriptRulesAirbnb,
    ...typescriptRules,
    '@typescript-eslint/no-floating-promises': [
      ERROR,
      {
        ignoreIIFE: false,
        ignoreVoid: true,
      },
    ],
    '@typescript-eslint/no-misused-promises': [
      ERROR,
      {
        checksVoidReturn: {
          arguments: false,
          attributes: false,
        },
      },
    ],
    camelcase: OFF,
    '@typescript-eslint/naming-convention': [
      ERROR,
      {
        selector: 'default',
        format: ['camelCase'],
      },
      {
        filter: {
          regex: 'Context$',
          match: true,
        },
        selector: 'variable',
        format: ['PascalCase', 'camelCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
      },
      {
        selector: 'variable',
        format: ['PascalCase', 'camelCase'],
        types: ['function'],
      },
      {
        selector: 'function',
        format: ['PascalCase', 'camelCase'],
      },
      {
        selector: 'objectLiteralProperty',
        format: null,
      },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'has', 'can'],
      },
      {
        selector: 'parameter',
        format: ['PascalCase', 'camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        prefix: ['T'],
      },
    ],
  },
}

module.exports = overrides
