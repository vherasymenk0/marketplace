// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth'

import { JWTResponse } from '~/entities/auth'
import { UserModel } from '~/entities/user'

declare module 'next-auth' {
  interface Session {
    expires: string
    user: UserModel
    apiToken: string
    apiTokenValues: JWTResponse
  }
  interface User {
    id: number
    apiToken: string
    apiTokenValues: JWTResponse
  }

  type UpdateSession = (data?: string) => Promise<Session | null>
}

declare module 'next-auth/jwt' {
  interface JWT {
    exp: number
    user: UserModel
    apiToken: string
    apiTokenValues: JWTResponse
  }
}
