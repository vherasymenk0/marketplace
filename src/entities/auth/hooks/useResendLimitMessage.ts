'use client'

import { useState } from 'react'
import { useIntl } from 'react-intl'

import { showSuccessToast } from '~/shared/services/toastr'

import { RESEND_TIME_LIMIT } from '../lib/constants'

export const useResendLimitMessage = () => {
  const [isDisabled, setIsDisabled] = useState(false)
  const intl = useIntl()

  const successMessage = intl.formatMessage({
    id: 'buyer.sinup.verify.resendSuccess',
    defaultMessage: 'New email sent successfully',
  })

  const handleResend = () => {
    setIsDisabled(true)
    showSuccessToast(successMessage)

    setTimeout(() => {
      setIsDisabled(false)
    }, RESEND_TIME_LIMIT)
  }

  return { handleResend, isDisabled }
}
