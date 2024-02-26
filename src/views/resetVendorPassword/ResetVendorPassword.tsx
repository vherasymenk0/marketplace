'use client'

import { Stack } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { FormattedMessage } from 'react-intl'

import { ResetVendorPasswordForm } from '~/features/auth/resetVendorPassword'

import LockIcon from '~/shared/assets/icons/lock-icon.svg'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'
import { IconShape } from '~/shared/components/common/IconShape'

import { useStyles } from './ResetVendorPassword.styles'

export const ResetVendorPassword = () => {
  const styles = useStyles()
  const router = useRouter()

  useEffect(() => {
    router.prefetch('/vendor/reset-password/success')
  }, [router])

  return (
    <Stack sx={styles.container}>
      <IconShape>
        <SvgIcon icon={LockIcon} size={32} stroke="primary.dark" />
      </IconShape>

      <Text variant="h4" sx={styles.title}>
        <FormattedMessage defaultMessage="Enter New Password" id="vendor.resetPassword.title" />
      </Text>

      <Text variant="body3" sx={styles.subtitle}>
        <FormattedMessage
          defaultMessage="Please create a new password for your account. Once changed, your new password will be in effect next time you sign-in."
          id="vendor.resetPassword.description"
        />
      </Text>

      <ResetVendorPasswordForm />
    </Stack>
  )
}
