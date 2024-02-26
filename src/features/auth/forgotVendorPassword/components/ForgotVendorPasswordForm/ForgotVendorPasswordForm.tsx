import { Stack } from '@mui/material'
import { FormProvider } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { ForgotVendorPasswordFormTemplate } from '~/entities/auth'

import { Button } from '~/shared/components/base/Button'

import { useForgotVendorPasswordForm } from '../../hooks/useForgotVendorPasswordForm'

export const ForgotVendorPasswordForm = () => {
  const { methods, isPending, onSubmit } = useForgotVendorPasswordForm()

  return (
    <FormProvider {...methods}>
      <Stack component="form" onSubmit={onSubmit} noValidate>
        <ForgotVendorPasswordFormTemplate />

        <Stack gap={2} mt={4}>
          <Button type="submit" loading={isPending}>
            <FormattedMessage defaultMessage="Submit" id="vendor.forgotPassword.submit" />
          </Button>

          <Button variant="outlined" href="/vendor/sign-in" fullWidth>
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
