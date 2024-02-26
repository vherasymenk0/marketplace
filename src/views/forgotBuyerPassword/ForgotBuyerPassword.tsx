'use client'

import { FormHelperText, Stack } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { FormattedMessage } from 'react-intl'

import { ForgotBuyerPasswordForm } from '~/features/auth/forgotBuyerPassword'

import LockIcon from '~/shared/assets/icons/lock-icon.svg'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'
import { IconShape } from '~/shared/components/common/IconShape'

import { useStyles } from './ForgotBuyerPassword.styles'

export const ForgotBuyerPassword = () => {
  const styles = useStyles()
  const router = useRouter()

  useEffect(() => {
    router.prefetch('/forgot-password/email-sent')
  }, [router])

  return (
    <Stack alignItems={{ xs: 'center', md: 'flex-start' }}>
      <IconShape>
        <SvgIcon icon={LockIcon} size={32} stroke="primary.dark" />
      </IconShape>

      <Text variant="h4" sx={styles.title}>
        <FormattedMessage defaultMessage="Forgot Password?" id="buyer.forgotPassword.title" />
      </Text>

      <FormHelperText sx={styles.subtitle}>
        <Text variant="body3">
          <FormattedMessage
            defaultMessage="Enter the email address you used to create your account and we’ll send you a link to change password."
            id="buyer.forgotPassword.description"
          />
        </Text>
      </FormHelperText>

      <ForgotBuyerPasswordForm />
    </Stack>
  )
}
