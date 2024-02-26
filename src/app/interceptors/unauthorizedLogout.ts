import { signOut } from 'next-auth/react'

import { isOfType } from '~/shared/helpers/isOfType'
import { InterceptorError } from '~/shared/services/fetch'

const statusError = [401]

export const logoutOnUnauthorized = async (error: InterceptorError) => {
  if (error && isOfType.object(error) && 'response' in error) {
    const { response } = error

    if (response && response instanceof Response) {
      const { status } = response

      if (statusError.includes(status)) {
        await signOut({ callbackUrl: '/sign-in' })
      }
    }
  }

  return error
}
