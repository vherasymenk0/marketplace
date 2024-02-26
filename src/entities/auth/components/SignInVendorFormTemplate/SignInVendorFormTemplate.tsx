'use client'

import { Stack } from '@mui/material'
import { FormattedMessage, useIntl } from 'react-intl'

import { NextLink } from '~/shared/components/base/NextLink'
import { Text } from '~/shared/components/base/Text'
import { PasswordField } from '~/shared/components/fields/PasswordField'
import { TextField } from '~/shared/components/fields/TextField'

import { useStyles } from './SignInVendorFormTemplate.styles'

export const SignInVendorFormTemplate = () => {
  const intl = useIntl()
  const styles = useStyles()

  return (
    <Stack gap={3}>
      <TextField
        type="email"
        name="email"
        label={intl.formatMessage({ id: 'vendor.signin.email', defaultMessage: 'Email' })}
        required
      />

      <Stack>
        <PasswordField
          name="password"
          label={intl.formatMessage({ id: 'vendor.signin.password', defaultMessage: 'Password' })}
          required
        />

        <NextLink href="/vendor/forgot-password" noLinkStyle sx={styles.link}>
          <Text variant="body4" sx={styles.helperText}>
            <FormattedMessage
              id="buyer.signin.forgotPassword"
              defaultMessage="Forgot your password?"
            />
          </Text>
        </NextLink>
      </Stack>
    </Stack>
  )
}
