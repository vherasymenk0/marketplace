'use client'

import { FormHelperText, Stack } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { FormattedMessage } from 'react-intl'

import { ForgotVendorPasswordForm } from '~/features/auth/forgotVendorPassword'

import LockIcon from '~/shared/assets/icons/lock-icon.svg'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'
import { IconShape } from '~/shared/components/common/IconShape'

import { useStyles } from './ForgotVendorPassword.styles'

export const ForgotVendorPassword = () => {
  const styles = useStyles()
  const router = useRouter()

  useEffect(() => {
    router.prefetch('/vendor/forgot-password/email-sent')
  }, [router])

  return (
    <Stack alignItems={{ xs: 'center', md: 'flex-start' }}>
      <IconShape>
        <SvgIcon icon={LockIcon} size={32} stroke="primary.dark" />
      </IconShape>

      <Text variant="h4" sx={styles.title}>
        <FormattedMessage defaultMessage="Forgot Password?" id="vendor.forgotPassword.title" />
      </Text>

      <FormHelperText sx={styles.subtitle}>
        <Text variant="body3">
          <FormattedMessage
            defaultMessage="Enter the email address you used to create your account and we’ll send you a link to change password."
            id="vendor.forgotPassword.description"
          />
        </Text>
      </FormHelperText>

      <ForgotVendorPasswordForm />
    </Stack>
  )
}
