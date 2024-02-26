import { Box, Stack } from '@mui/material'
import { FormProvider } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { CreateVendorFormTemplate } from '~/entities/auth'

import { Button } from '~/shared/components/base/Button'
import { NextLink } from '~/shared/components/base/NextLink'
import { Text } from '~/shared/components/base/Text'

import { useCreateVendorForm } from '../../hooks/useCreateVendorForm'

import { useStyles } from './CreateVendorForm.styles'

export const CreateVendorForm = () => {
  const { methods, isPending, handleSubmit, phoneDetails, phoneFieldDisabled } =
    useCreateVendorForm()

  const styles = useStyles()

  return (
    <FormProvider {...methods}>
      <Box component="form" noValidate onSubmit={handleSubmit}>
        <CreateVendorFormTemplate
          phoneNumberMask={phoneDetails.mask}
          countryCode={phoneDetails.countryCode}
          phoneFieldDisabled={phoneFieldDisabled}
        />

        <Stack sx={styles.submitButton}>
          <Button type="submit" loading={isPending} fullWidth>
            <FormattedMessage defaultMessage="Send Request" id="signup.vendor.submitBtn" />
          </Button>

          <Text variant="subtitle4" sx={styles.customerLink}>
            <FormattedMessage
              id="signup.vendor.haveAccountLink"
              defaultMessage="Already have an account? {link}"
              values={{
                link: (
                  <NextLink href="/vendor/sign-in">
                    <FormattedMessage
                      defaultMessage="Vendor Sign in"
                      id="signup.vendor.signInLink"
                    />
                  </NextLink>
                ),
              }}
            />
          </Text>
        </Stack>
      </Box>
    </FormProvider>
  )
}
