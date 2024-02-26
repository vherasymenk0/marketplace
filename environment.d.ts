/* eslint-disable @typescript-eslint/naming-convention */
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_URL: string
    NEXT_PUBLIC_APP_URL: string
    APP_ENV?: 'local' | 'staging' | 'production' | 'test'
    NEXTAUTH_SECRET: string
    NEXTAUTH_URL: string
    ASSETS_URL?: string
  }
}
