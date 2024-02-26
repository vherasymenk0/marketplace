const { ERROR } = require('../../constants/severity')

const rules = {
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
  'import/order': [
    ERROR,
    {
      'newlines-between': 'always',
      pathGroups: [
        {
          pattern: 'react',
          group: 'builtin',
          position: 'before',
        },
      ],
      pathGroupsExcludedImportTypes: ['builtin'],
      alphabetize: { order: 'asc', caseInsensitive: true },
    },
  ],
  // https://eslint.org/docs/rules/sort-imports
  'sort-imports': [
    ERROR,
    {
      ignoreDeclarationSort: true,
      allowSeparatedGroups: true,
    },
  ],
}

module.exports = rules
