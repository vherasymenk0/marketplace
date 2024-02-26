const base = require('./config/_base')
const configs = require('./config/configs')
const docs = require('./config/docs')
const jest = require('./config/jest')
const mdx = require('./config/mdx')
const react = require('./config/react')
const scripts = require('./config/scripts')
const typescript = require('./config/typescript')

const config = {
  ...base,
  ignorePatterns: ['node_modules/', 'coverage/', 'dist/'],
  overrides: [typescript, react, jest, docs, mdx, configs, scripts],
}

module.exports = config
