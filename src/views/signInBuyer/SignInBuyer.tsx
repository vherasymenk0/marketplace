'use client'

import { Stack } from '@mui/material'
import { FormattedMessage, useIntl } from 'react-intl'

import { SignInBuyerForm } from 'src/features/auth/signInBuyer'

import VendorIcon from '~/shared/assets/icons/vendor-icon.svg'
import { Text } from '~/shared/components/base/Text'
import { SwitchUserBanner } from '~/shared/components/common/SwitchUserBanner'

import { useStyles } from './SignInBuyer.styles'

export const SignInBuyer = () => {
  const styles = useStyles()
  const intl = useIntl()

  return (
    <Stack sx={styles.wrapper}>
      <Text variant="h4" sx={styles.title}>
        <FormattedMessage id="buyer.signin.title" defaultMessage="Sign in as Buyer" />
      </Text>
      <Stack sx={styles.banner}>
        <SwitchUserBanner
          title={intl.formatMessage({
            defaultMessage: 'Are you a Vendor?',
            id: 'buyer.signup.banner.title',
          })}
          icon={VendorIcon}
          action={{
            href: '/vendor/sign-in',
            label: intl.formatMessage({
              defaultMessage: 'Click here to Sign in',
              id: 'buyer.signin.banner.link',
            }),
          }}
        />
      </Stack>

      <SignInBuyerForm />
    </Stack>
  )
}
