import { Stack } from '@mui/material'
import { FormProvider } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { ForgotBuyerPasswordFormTemplate } from '~/entities/auth'

import { Button } from '~/shared/components/base/Button'

import { useForgotBuyerPasswordForm } from '../../hooks/useForgotBuyerPasswordForm'

export const ForgotBuyerPasswordForm = () => {
  const { methods, isPending, onSubmit } = useForgotBuyerPasswordForm()

  return (
    <FormProvider {...methods}>
      <Stack component="form" onSubmit={onSubmit} noValidate>
        <ForgotBuyerPasswordFormTemplate />

        <Stack gap={2} mt={4}>
          <Button type="submit" loading={isPending}>
            <FormattedMessage defaultMessage="Submit" id="vendor.forgotPassword.submit" />
          </Button>

          <Button variant="outlined" fullWidth href="/sign-in">
            <FormattedMessage
              defaultMessage="Back to Sign in"
              id="vendor.forgotPassword.backButton"
            />
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  )
}
