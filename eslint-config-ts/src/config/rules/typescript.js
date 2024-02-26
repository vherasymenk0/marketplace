const { ERROR, OFF } = require('../../constants/severity')

const restrictedImports = require('./_restricted-imports')

const rules = {
  // modules
  ...restrictedImports,
  'import/no-extraneous-dependencies': ERROR,
  'import/prefer-default-export': OFF,
  'import/extensions': OFF,
  // typescript
  'no-console': [ERROR, { allow: ['info', 'warn', 'error'] }],
  'no-use-before-define': OFF,
  '@typescript-eslint/no-use-before-define': ERROR,
  'no-unused-vars': OFF,
  '@typescript-eslint/no-unused-vars': [
    ERROR,
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
    },
  ],
  '@typescript-eslint/no-non-null-assertion': ERROR,
  '@typescript-eslint/explicit-module-boundary-types': OFF,
  '@typescript-eslint/explicit-function-return-type': OFF,
  '@typescript-eslint/no-explicit-any': OFF,
  'no-underscore-dangle': [ERROR, { allowAfterThis: true, allow: ['_base'] }],
  '@typescript-eslint/ban-types': [
    'error',
    {
      types: {
        FC: {
          message: 'Please use `(props: Props): ReactNode => {}` instead.',
        },
        FunctionalComponent: {
          message: 'Please use `(props: Props): ReactNode => {}` instead.',
        },
      },
    },
  ],
  'no-void': OFF,
}

module.exports = rules
