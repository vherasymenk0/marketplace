'use client'

import { Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import { ResendLimitMessage } from '~/features/auth/resendLimitMessage'

import LockIcon from '~/shared/assets/icons/lock-icon.svg'
import { Button } from '~/shared/components/base/Button'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'
import { IconShape } from '~/shared/components/common/IconShape'

import { useResetPasswordExpiredLink } from '../../hooks/useResetPasswordExpiredLink'

import { useStyles } from './ResetPasswordExpiredLink.styles'

interface Props {
  resendCallback: ({ token }: { token: string }) => Promise<void>
}

export const ResetPasswordExpiredLink = ({ resendCallback }: Props) => {
  const styles = useStyles()

  const { isDisabled, isLoading, onResend } = useResetPasswordExpiredLink({
    resendCallback,
  })

  return (
    <Stack sx={styles.pageContainer}>
      <IconShape>
        <SvgIcon icon={LockIcon} size={32} stroke="primary.dark" />
      </IconShape>

      <Stack gap={2}>
        <Text variant="h4" sx={{ mt: 3 }} color="grey.900">
          <FormattedMessage
            defaultMessage="Link was expired"
            id="forgotPassword.linkExpired.title"
          />
        </Text>

        <Text variant="body3" color={({ palette }) => palette.grey[600]}>
          <FormattedMessage
            defaultMessage="It looks like your password reset link has expired. You can get a new password reset email by clicking the button below."
            id="forgotPassword.linkExpired.description1"
          />
        </Text>

        <Text variant="body3" color={({ palette }) => palette.grey[600]}>
          <FormattedMessage
            defaultMessage="If you continue to encounter issues or need further assistance, please contact our support team."
            id="forgotPassword.linkExpired.description2"
          />
        </Text>
      </Stack>

      <Button
        onClick={onResend}
        disabled={isDisabled}
        loading={isLoading}
        sx={{ width: { xs: '100%', md: 200 }, mt: 4 }}
      >
        <FormattedMessage defaultMessage="Resend" id="forgotPassword.linkExpired.resend" />
      </Button>
      <ResendLimitMessage show={isDisabled} />
    </Stack>
  )
}
