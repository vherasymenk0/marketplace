import jwtDecode from 'jwt-decode'
import { redirect } from 'next/navigation'

import { ApiMethod } from '~/shared/services/fetch'

import { JWTResponse } from '../model/auth'

interface Props {
  token: string
  verifyResetToken?: ApiMethod
  redirectPath: string
}

export const useTokenValidation = async ({ verifyResetToken, token, redirectPath }: Props) => {
  const redirectWhenJWTExpired = () => {
    redirect(`${redirectPath}?token=${token}`)
  }

  if (verifyResetToken) {
    try {
      await verifyResetToken({ authorizeToken: token })
    } catch (error) {
      console.error(error)
      redirectWhenJWTExpired()
    }
  }

  const userData = jwtDecode<JWTResponse>(token)
  const linkIsExpired = Math.floor(Date.now() / 1000) > Number(userData.exp)

  if (linkIsExpired) redirectWhenJWTExpired()
}
