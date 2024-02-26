import { Stack } from '@mui/material'
import { FormProvider } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { ResetVendorPasswordFormTemplate } from '~/entities/auth'

import { Button } from '~/shared/components/base/Button'

import { useResetVendorPasswordForm } from '../../hooks/useResetVendorPasswordForm'

import { useStyles } from './ResetVendorPasswordForm.styles'

export const ResetVendorPasswordForm = () => {
  const styles = useStyles()
  const { methods, isPending, onSubmit } = useResetVendorPasswordForm()

  return (
    <FormProvider {...methods}>
      <Stack component="form" onSubmit={onSubmit} sx={styles.container} noValidate>
        <ResetVendorPasswordFormTemplate />

        <Button type="submit" loading={isPending} sx={styles.submitBtn} fullWidth>
          <FormattedMessage defaultMessage="Confirm" id="vendor.resetPassword.submit" />
        </Button>
      </Stack>
    </FormProvider>
  )
}
