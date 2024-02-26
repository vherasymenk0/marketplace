'use client'

import { Stack } from '@mui/material'
import { FormattedMessage, useIntl } from 'react-intl'

import { SignInVendorForm } from '~/features/auth'

import BuyerIcon from '~/shared/assets/icons/buyer-icon.svg'
import { Text } from '~/shared/components/base/Text'
import { SwitchUserBanner } from '~/shared/components/common/SwitchUserBanner'

import { useStyles } from './SignInVendor.styles'

export const SignInVendor = () => {
  const styles = useStyles()
  const intl = useIntl()

  return (
    <Stack sx={styles.wrapper}>
      <Text variant="h4" sx={styles.title}>
        <FormattedMessage id="vendor.signin.title" defaultMessage="Sign in as Vendor" />
      </Text>
      <Stack sx={styles.banner}>
        <SwitchUserBanner
          title={intl.formatMessage({
            defaultMessage: 'Are you a Buyer?',
            id: 'vendor.signup.banner.title',
          })}
          icon={BuyerIcon}
          action={{
            href: '/sign-in',
            label: intl.formatMessage({
              defaultMessage: 'Click here to Sign in',
              id: 'buyer.signin.banner.link',
            }),
          }}
        />
      </Stack>

      <SignInVendorForm />
    </Stack>
  )
}
