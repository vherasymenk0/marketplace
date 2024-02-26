/* eslint-disable no-param-reassign */
import jwtDecode from 'jwt-decode'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { appConfig } from '@config/app'

import { getBuyerData, getVendorData } from '~/entities/user'

import { JWTSchemaResponse } from '../model/auth'
import { UpdateAuthSession } from '../model/interfaces'

export const authConfig: NextAuthOptions = {
  secret: appConfig.private.nextAuthSecret,
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      type: 'credentials',
      credentials: {
        token: {},
      },
      authorize: (credentials) => {
        if (typeof credentials === 'undefined') {
          return null
        }

        const { token } = credentials

        const tokenValues = JWTSchemaResponse.safeParse(jwtDecode(token))

        if (!tokenValues.success) {
          throw new Error(tokenValues.error.message)
        }

        return {
          id: tokenValues.data.id,
          apiToken: token,
          apiTokenValues: tokenValues.data,
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, trigger, session }) => {
      if (trigger === 'update') {
        const newSession = session as UpdateAuthSession

        return {
          ...token,
          ...newSession,
          ...(newSession.apiToken && {
            apiToken: newSession.apiToken,
            apiTokenValues: JWTSchemaResponse.parse(jwtDecode(newSession.apiToken)),
          }),
        }
      }

      if (user) {
        if (user.apiTokenValues.type === 'user') {
          const userData = await getBuyerData({ authorizeToken: user.apiToken })

          token.user = userData
        }

        if (user.apiTokenValues.type === 'vendor') {
          const userData = await getVendorData({ authorizeToken: user.apiToken })
          token.user = userData
        }

        token.apiToken = user.apiToken
        token.apiTokenValues = user.apiTokenValues
      }

      return token
    },
    session: ({ session, token }) => {
      session.apiToken = token.apiToken
      session.user = token.user
      session.apiTokenValues = token.apiTokenValues

      return session
    },
  },
  pages: {
    signIn: '/sign-in',
  },
}
