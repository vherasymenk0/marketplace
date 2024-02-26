const { ERROR } = require('../constants/severity')

const importOrderRules = require('./rules/_import-order')
const typescriptRules = require('./rules/typescript')
const reactRules = require('./rules/react')
const mdxRules = require('./rules/mdx-airbnb')

const overrides = {
  files: ['**/*.mdx'],
  plugins: ['@typescript-eslint', 'react', 'mdx'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:mdx/recommended',
  ],
  parser: 'eslint-mdx',
  parserOptions: {
    extraFileExtensions: ['mdx'],
  },
  rules: {
    ...importOrderRules,
    ...typescriptRules,
    ...reactRules,
    ...mdxRules,
    // modules
    'react/jsx-filename-extension': [ERROR, { extensions: ['.mdx'] }],
  },
}

module.exports = overrides
