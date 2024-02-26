'use client'

import { Stack } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { FormattedMessage } from 'react-intl'

import { ResetBuyerPasswordForm } from '~/features/auth/resetBuyerPassword'

import LockIcon from '~/shared/assets/icons/lock-icon.svg'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'
import { IconShape } from '~/shared/components/common/IconShape'

import { useStyles } from './ResetBuyerPassword.styles'

export const ResetBuyerPassword = () => {
  const styles = useStyles()
  const router = useRouter()

  useEffect(() => {
    router.prefetch('/reset-password/success')
  }, [router])

  return (
    <Stack sx={styles.container}>
      <IconShape>
        <SvgIcon icon={LockIcon} size={32} stroke="primary.dark" />
      </IconShape>

      <Text variant="h4" sx={styles.title}>
        <FormattedMessage defaultMessage="Enter New Password" id="resetPassword.title" />
      </Text>

      <Text variant="body3" sx={styles.subtitle}>
        <FormattedMessage
          defaultMessage="Please create a new password for your account. Once changed, your new password will be in effect next time you sign-in."
          id="resetPassword.description"
        />
      </Text>

      <ResetBuyerPasswordForm />
    </Stack>
  )
}
