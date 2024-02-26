import { Box } from '@mui/material'
import { FormProvider } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { CreateVendorPasswordFormTemplate } from '~/entities/auth'

import { Button } from '~/shared/components/base/Button'

import { useCreateVendorPasswordForm } from '../../hooks/useCreateVendorPasswordForm'

import { useStyles } from './CreateVendorPasswordForm.styles'

export const CreateVendorPasswordForm = () => {
  const { methods, isPending, onSubmit } = useCreateVendorPasswordForm()
  const styles = useStyles()

  return (
    <FormProvider {...methods}>
      <Box component="form" sx={styles.container} noValidate onSubmit={onSubmit}>
        <CreateVendorPasswordFormTemplate />

        <Button type="submit" loading={isPending} sx={styles.submitBtn} fullWidth>
          <FormattedMessage defaultMessage="Submit" id="createPassword.vendor.submit" />
        </Button>
      </Box>
    </FormProvider>
  )
}
