import { Stack } from '@mui/material'
import { FormProvider } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { ResetBuyerPasswordFormTemplate } from '~/entities/auth'

import { Button } from '~/shared/components/base/Button'

import { useResetBuyerPasswordForm } from '../../hooks/useResetBuyerPasswordForm'

import { useStyles } from './ResetBuyerPasswordForm.styles'

export const ResetBuyerPasswordForm = () => {
  const styles = useStyles()
  const { methods, isPending, onSubmit } = useResetBuyerPasswordForm()

  return (
    <FormProvider {...methods}>
      <Stack component="form" onSubmit={onSubmit} sx={styles.container} noValidate>
        <ResetBuyerPasswordFormTemplate />

        <Button type="submit" loading={isPending} sx={styles.submitBtn} fullWidth>
          <FormattedMessage defaultMessage="Confirm" id="resetPassword.submit" />
        </Button>
      </Stack>
    </FormProvider>
  )
}
