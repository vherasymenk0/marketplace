import { defineConfig } from '../defineConfig'

export const createTestConfig = () =>
  defineConfig({
    env: 'test',
    apiURL: 'mock',
    appURL: 'mock',
    private: {
      nextAuthSecret: 'test',
      nextAuthUrl: 'test',
    },
  })
