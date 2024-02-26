'use client'

import { Stack } from '@mui/material'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { FormattedMessage } from 'react-intl'

import { ResendLimitMessage } from '~/features/auth/resendLimitMessage'

import { resendVendorPasswordCreationLink, useResendLimitMessage } from '~/entities/auth'

import EmailIcon from '~/shared/assets/icons/email-icon.svg'
import { Button } from '~/shared/components/base/Button'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'
import { IconShape } from '~/shared/components/common/IconShape'

import { useStyles } from './CreatePasswordLinkExpired.styles'

export const CreatePasswordLinkExpired = () => {
  const [loading, setLoading] = useState(false)
  const { isDisabled, handleResend } = useResendLimitMessage()
  const styles = useStyles()

  const searchParams = useSearchParams()
  const token = searchParams.get('token') ?? ''

  const onResend = async () => {
    try {
      setLoading(true)
      await resendVendorPasswordCreationLink({ token })
      setLoading(false)
      handleResend()
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  return (
    <Stack sx={styles.pageContainer}>
      <IconShape>
        <SvgIcon icon={EmailIcon} size={32} stroke="primary.dark" />
      </IconShape>

      <Stack gap={2}>
        <Text variant="h4" sx={{ mt: 3 }}>
          <FormattedMessage
            defaultMessage="Link was expired"
            id="vendor.signup.linkExpired.title"
          />
        </Text>

        <Text variant="body3" color={({ palette }) => palette.grey[600]}>
          <FormattedMessage
            defaultMessage="It looks like your password creation link has expired. You can get a new password creation email by clicking the button below."
            id="vendor.signup.linkExpired.description1"
          />
        </Text>

        <Text variant="body3" color={({ palette }) => palette.grey[600]}>
          <FormattedMessage
            defaultMessage="If you continue to encounter issues or need further assistance, please contact our support team."
            id="vendor.signup.linkExpired.description2"
          />
        </Text>
      </Stack>

      <Button
        onClick={onResend}
        disabled={isDisabled}
        loading={loading}
        sx={{ width: { xs: '100%', md: 200 }, mt: 4 }}
      >
        <FormattedMessage defaultMessage="Resend" id="vendor.signup.linkExpired.resend" />
      </Button>
      <ResendLimitMessage show={isDisabled} />
    </Stack>
  )
}
