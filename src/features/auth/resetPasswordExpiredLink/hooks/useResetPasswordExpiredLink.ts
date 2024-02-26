import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { useResendLimitMessage } from '~/entities/auth'

export const useResetPasswordExpiredLink = ({
  resendCallback,
}: {
  resendCallback: ({ token }: { token: string }) => Promise<void>
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const { isDisabled, handleResend } = useResendLimitMessage()

  const searchParams = useSearchParams()
  const token = searchParams.get('token') ?? ''

  const onResend = async () => {
    try {
      setIsLoading(true)
      await resendCallback({ token })
      setIsLoading(false)
      handleResend()
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }

  return { onResend, isDisabled, isLoading }
}
