import { useSession } from 'next-auth/react'

import { resendBuyerVerifyCode, useResendLimitMessage } from '~/entities/auth'

export const useResendBuyerVerification = () => {
  const { isDisabled, handleResend } = useResendLimitMessage()
  const session = useSession()

  const handleClick = async () => {
    await resendBuyerVerifyCode({ authorizeToken: session.data?.apiToken })
    handleResend()
  }

  return { isDisabled, handleClick }
}
