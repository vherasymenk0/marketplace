const { default: nextJest } = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
    '@public/(.*)': '<rootDir>/public/$1',
    '@config/(.*)': '<rootDir>/config/$1',
    '^.+\\.(svg)$': '<rootDir>/src/__mocks__/svg.tsx',
  },
  testPathIgnorePatterns: ['<rootDir>/scripts/', '<rootDir>/config/'],
}

module.exports = createJestConfig(customJestConfig)
