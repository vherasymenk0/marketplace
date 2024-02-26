const { ERROR } = require('../../constants/severity')

// https://eslint.org/docs/rules/no-restricted-imports
const rules = {
  'no-restricted-imports': [
    ERROR,
    {
      paths: [
        {
          name: 'react',
          importNames: ['default'],
          message: "Use named import from 'react' library",
        },
      ],
    },
  ],
}

module.exports = rules
