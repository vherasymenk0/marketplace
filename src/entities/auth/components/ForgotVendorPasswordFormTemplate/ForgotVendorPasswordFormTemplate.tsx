'use client'

import { Stack } from '@mui/material'
import { useIntl } from 'react-intl'

import { TextField } from '~/shared/components/fields/TextField'

export const ForgotVendorPasswordFormTemplate = () => {
  const intl = useIntl()

  return (
    <Stack>
      <TextField
        type="email"
        name="email"
        label={intl.formatMessage({
          defaultMessage: 'Email',
          id: 'forgotVendorPassword.fields.email',
        })}
        required
      />
    </Stack>
  )
}
