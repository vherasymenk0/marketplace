'use client'

import { Stack } from '@mui/material'
import { useIntl } from 'react-intl'

import { TextField } from '~/shared/components/fields/TextField'

export const ForgotBuyerPasswordFormTemplate = () => {
  const intl = useIntl()

  return (
    <Stack>
      <TextField
        type="email"
        name="email"
        label={intl.formatMessage({
          defaultMessage: 'Email',
          id: 'forgotBuyerPassword.fields.email',
        })}
        required
      />
    </Stack>
  )
}
