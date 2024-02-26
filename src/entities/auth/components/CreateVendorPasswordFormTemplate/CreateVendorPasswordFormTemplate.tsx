'use client'

import { Stack } from '@mui/material'
import { FormattedMessage, useIntl } from 'react-intl'

import { Text } from '~/shared/components/base/Text'
import { PasswordField } from '~/shared/components/fields/PasswordField'
import { PASSWORD_HELPER_MESSAGE } from '~/shared/constants/messages'

export const CreateVendorPasswordFormTemplate = () => {
  const intl = useIntl()

  return (
    <Stack gap={2}>
      <Stack>
        <PasswordField
          name="password"
          label={intl.formatMessage({
            defaultMessage: 'New Password',
            id: 'createPassword.vendor.password.label',
          })}
          required
        />

        <Text variant="body5" color={({ palette }) => palette.grey[600]} mt={0.5}>
          <FormattedMessage
            defaultMessage={PASSWORD_HELPER_MESSAGE}
            id="createPassword.vendor.password.helperText"
          />
        </Text>
      </Stack>

      <PasswordField
        name="passwordConfirmation"
        label={intl.formatMessage({
          defaultMessage: 'Confirm Password',
          id: 'createPassword.vendor.confirmPassword.label',
        })}
        required
      />
    </Stack>
  )
}
