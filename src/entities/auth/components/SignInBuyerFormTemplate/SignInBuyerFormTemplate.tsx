'use client'

import { Stack } from '@mui/material'
import { FormattedMessage, useIntl } from 'react-intl'

import { NextLink } from '~/shared/components/base/NextLink'
import { Text } from '~/shared/components/base/Text'
import { PasswordField } from '~/shared/components/fields/PasswordField'
import { TextField } from '~/shared/components/fields/TextField'

import { useStyles } from './SignInBuyerFormTemplate.styles'

export const SignInBuyerFormTemplate = () => {
  const styles = useStyles()
  const intl = useIntl()

  return (
    <Stack gap={3}>
      <TextField
        type="email"
        name="email"
        label={intl.formatMessage({ id: 'buyer.signin.email', defaultMessage: 'Email' })}
        required
      />

      <Stack>
        <PasswordField
          name="password"
          label={intl.formatMessage({ id: 'buyer.signin.password', defaultMessage: 'Password' })}
          required
        />

        <NextLink href="/forgot-password" noLinkStyle sx={styles.link}>
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
