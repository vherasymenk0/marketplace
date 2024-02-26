import { Stack } from '@mui/material'
import { FormProvider } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { SignInVendorFormTemplate } from '~/entities/auth'

import { Button } from '~/shared/components/base/Button'
import { NextLink } from '~/shared/components/base/NextLink'
import { Text } from '~/shared/components/base/Text'

import { useSignInVendorForm } from '../../hooks/useSignInVendorForm'

import { useStyles } from './SignInVendorForm.styles'

export const SignInVendorForm = () => {
  const { methods, onSubmit } = useSignInVendorForm()
  const styles = useStyles()

  const {
    formState: { isSubmitting },
  } = methods

  return (
    <FormProvider {...methods}>
      <Stack component="form" sx={{ width: '100%' }} gap={4} noValidate onSubmit={onSubmit}>
        <SignInVendorFormTemplate />

        <Stack>
          <Button type="submit" loading={isSubmitting} fullWidth>
            <FormattedMessage id="vendor.signin.btn" defaultMessage="Sign In" />
          </Button>

          <Text variant="subtitle4" sx={styles.text}>
            <FormattedMessage
              id="vendor.signin.dontHave"
              defaultMessage="Don’t have an account? {link}"
              values={{
                link: (
                  <NextLink href="/vendor/sign-up">
                    <FormattedMessage defaultMessage="Vendor Sign up" id="common.vendorSignup" />
                  </NextLink>
                ),
              }}
            />
          </Text>
        </Stack>
      </Stack>
    </FormProvider>
  )
}
