import { defineConfig } from '../defineConfig'

export const createLocalConfig = () =>
  defineConfig({
    env: 'local',
    apiURL: 'http://localhost:3000',
    appURL: 'http://localhost:3001',
    private: {
      nextAuthSecret: process.env.NEXTAUTH_SECRET,
      nextAuthUrl: process.env.NEXTAUTH_URL,
    },
  })
