module.exports = {
  extends: ['next', './eslint-config-ts/src/index.js', 'plugin:boundaries/recommended'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
    },
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
    'import/resolver': {
      typescript: {},
    },
    'boundaries/elements': [
      { type: 'app', pattern: 'app/*' },
      { type: 'processes', pattern: 'processes/*' },
      { type: 'views', pattern: 'views/*' },
      { type: 'widgets', pattern: 'widgets/*' },
      { type: 'features', pattern: 'features/*' },
      { type: 'entities', pattern: 'entities/*' },
      { type: 'shared', pattern: 'shared/*' },
    ],
    'boundaries/ignore': ['**/*.test.*'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/naming-convention': 'off',
        'react/style-prop-object': [
          2,
          {
            allow: ['FormattedNumber', 'TableNumberCell'],
          },
        ],
        'import/order': [
          'error',
          {
            alphabetize: { order: 'asc', caseInsensitive: true },
            'newlines-between': 'always',
            pathGroups: [
              { group: 'internal', position: 'after', pattern: '~/views/**' },
              { group: 'internal', position: 'after', pattern: '~/widgets/**' },
              { group: 'internal', position: 'after', pattern: '~/features/**' },
              { group: 'internal', position: 'after', pattern: '~/entities/**' },
              { group: 'internal', position: 'after', pattern: '~/shared/**' },
            ],
            pathGroupsExcludedImportTypes: ['builtin'],
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          },
        ],
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: 'react',
                importNames: ['default'],
                message: "Use named import from 'react' library",
              },
            ],
            patterns: [
              {
                message: 'Private imports are prohibited, use public imports instead',
                group: ['~/app/*/**'],
              },
              {
                message: 'Private imports are prohibited, use public imports instead',
                group: ['~/views/*/*/**'],
              },
              {
                message: 'Private imports are prohibited, use public imports instead',
                group: ['~/widgets/*/*/**'],
              },
              {
                message: 'Private imports are prohibited, use public imports instead',
                group: ['~/features/*/*/**'],
              },
              {
                message: 'Private imports are prohibited, use public imports instead',
                group: ['~/entities/*/**'],
              },
              {
                message: 'Private imports are prohibited, use public imports instead',
                group: ['~/shared/*/*/**', '!~/shared/assets/*/**', '!~/shared/components/*/**'],
              },
              {
                message: 'Private imports are prohibited, use public imports instead',
                group: ['~/shared/components/*/*/**'],
              },
              {
                message: 'Prefer absolute imports instead of relatives (for root modules)',
                group: ['../**/app'],
              },
              {
                message: 'Prefer absolute imports instead of relatives (for root modules)',
                group: ['../**/processes'],
              },
              {
                message: 'Prefer absolute imports instead of relatives (for root modules)',
                group: ['../**/views/'],
              },
              {
                message: 'Prefer absolute imports instead of relatives (for root modules)',
                group: ['../**/widgets'],
              },
              {
                message: 'Prefer absolute imports instead of relatives (for root modules)',
                group: ['../**/features'],
              },
              {
                message: 'Prefer absolute imports instead of relatives (for root modules)',
                group: ['../**/entities'],
              },
              {
                message: 'Prefer absolute imports instead of relatives (for root modules)',
                group: ['../**/shared'],
              },
            ],
          },
        ],
        'boundaries/element-types': [
          'warn',
          {
            default: 'disallow',
            rules: [
              {
                from: 'app',
                allow: ['processes', 'views', 'widgets', 'features', 'entities', 'shared'],
              },
              { from: 'views', allow: ['widgets', 'features', 'entities', 'shared'] },
              { from: 'widgets', allow: ['features', 'entities', 'shared'] },
              { from: 'features', allow: ['entities', 'shared'] },
              { from: 'entities', allow: ['shared'] },
              { from: 'shared', allow: ['shared'] },
            ],
          },
        ],
      },
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
      rules: {
        'boundaries/element-types': 'off',
        'no-restricted-imports': 'off',
        'prefer-promise-reject-errors': 'off',
      },
    },
    {
      files: ['~/app/tests/test.utils.tsx'],
      rules: { 'no-restricted-imports': 'off' },
    },
  ],
}
