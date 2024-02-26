import { defineConfig } from '../defineConfig'

export const createStagingConfig = () =>
  defineConfig({
    env: 'staging',
    apiURL: process.env.NEXT_PUBLIC_API_URL,
    appURL: process.env.NEXT_PUBLIC_APP_URL,
    private: {
      nextAuthSecret: process.env.NEXTAUTH_SECRET,
      nextAuthUrl: process.env.NEXTAUTH_URL,
    },
  })
