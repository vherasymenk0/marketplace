'use client'

import { Stack } from '@mui/material'
import { FormattedMessage, useIntl } from 'react-intl'

import { NextLink } from '~/shared/components/base/NextLink'
import { Text } from '~/shared/components/base/Text'
import { PasswordField } from '~/shared/components/fields/PasswordField'
import { TextField } from '~/shared/components/fields/TextField'
import { PASSWORD_HELPER_MESSAGE } from '~/shared/constants/messages'

import { useStyles } from './CreateBuyerFormTemplate.styles'

export const CreateBuyerFormTemplate = () => {
  const intl = useIntl()
  const styles = useStyles()

  return (
    <Stack>
      <Stack sx={styles.allFieldsStack}>
        <TextField
          name="fullName"
          label={intl.formatMessage({ id: 'buyer.signup.fullName', defaultMessage: 'Full Name' })}
          required
        />
        <TextField
          type="email"
          name="email"
          label={intl.formatMessage({ id: 'buyer.signup.email', defaultMessage: 'Email' })}
          required
        />
        <Stack>
          <PasswordField
            name="password"
            label={intl.formatMessage({ id: 'buyer.signup.password', defaultMessage: 'Password' })}
            required
          />
          <Text variant="body5" sx={styles.helperText}>
            <FormattedMessage
              id="buyer.signup.passwordText"
              defaultMessage={PASSWORD_HELPER_MESSAGE}
            />
          </Text>
        </Stack>
      </Stack>
      <Text variant="subtitle4" sx={styles.agreeText} color="grey.900">
        <FormattedMessage
          id="buyer.signup.agree"
          defaultMessage="By continuing you agree to our {termsLink} and {policyLink}"
          values={{
            policyLink: (
              <NextLink href="/privacy-policy">
                <FormattedMessage defaultMessage="Privacy Policy" id="common.privacyPolicy" />
              </NextLink>
            ),
            termsLink: (
              <NextLink href="/terms">
                <FormattedMessage defaultMessage="Terms and Conditions" id="common.terms" />
              </NextLink>
            ),
          }}
        />
      </Text>
    </Stack>
  )
}
