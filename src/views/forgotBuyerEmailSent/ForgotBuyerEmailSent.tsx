'use client'

import { FormHelperText, Stack } from '@mui/material'
import { useSearchParams } from 'next/navigation'
import { FormattedMessage, useIntl } from 'react-intl'

import { ResendLimitMessage } from '~/features/auth/resendLimitMessage'

import {
  ForgotBuyerPasswordSchemaRequest,
  forgotBuyerPassword,
  useResendLimitMessage,
} from '~/entities/auth'

import LockIcon from '~/shared/assets/icons/lock-icon.svg'
import { InlineTextButton } from '~/shared/components/base/InlineTextButton'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'
import { IconShape } from '~/shared/components/common/IconShape'
import { showErrorToast } from '~/shared/services/toastr'

import { useStyles } from './ForgotBuyerEmailSent.styles'

export const ForgotBuyerEmailSent = () => {
  const styles = useStyles()
  const searchParams = useSearchParams()
  const intl = useIntl()

  const { isDisabled, handleResend } = useResendLimitMessage()

  const onResend = async () => {
    try {
      const email = searchParams.get('email') ?? ''
      const dto = ForgotBuyerPasswordSchemaRequest.parse({
        user: { email: decodeURIComponent(email) },
      })

      await forgotBuyerPassword(dto)
      handleResend()
    } catch (e) {
      console.error(e)

      showErrorToast(
        intl.formatMessage({
          defaultMessage: 'Something went wrong',
          id: 'common.errors.defaultError',
        }),
      )
    }
  }

  return (
    <Stack alignItems={{ xs: 'center', md: 'flex-start' }}>
      <IconShape>
        <SvgIcon icon={LockIcon} size={32} stroke="primary.dark" />
      </IconShape>

      <Text variant="h4" sx={styles.title}>
        <FormattedMessage
          defaultMessage="Email Has Been Sent!"
          id="buyer.forgotPassword.emailSent.title"
        />
      </Text>

      <Text variant="body3" sx={styles.subtitle}>
        <FormattedMessage
          defaultMessage="We’ve sent password reset instructions to your email, also check your spam folder."
          id="buyer.forgotPassword.emailSent.description"
        />
      </Text>

      <Stack direction="row" sx={styles.resendLink}>
        <FormHelperText>
          <Text variant="subtitle4">
            <FormattedMessage
              id="buyer.forgotPassword.emailSent.resend"
              defaultMessage="Didn’t receive the link?"
            />
          </Text>
        </FormHelperText>

        <InlineTextButton disabled={isDisabled} color="primary" onClick={onResend}>
          <Text variant="subtitle4">
            <FormattedMessage
              id="buyer.forgotPassword.emailSent.resendBtn"
              defaultMessage="Resend"
            />
          </Text>
        </InlineTextButton>
      </Stack>

      <ResendLimitMessage show={isDisabled} />
    </Stack>
  )
}
