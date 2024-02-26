'use client'

import { Stack } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'

import { CreateVendorForm } from '~/features/auth/createVendorAccount'

import BuyerIcon from '~/shared/assets/icons/buyer-icon.svg'
import { Text } from '~/shared/components/base/Text'
import { SwitchUserBanner } from '~/shared/components/common/SwitchUserBanner'

export const CreateVendorAccount = () => {
  const router = useRouter()
  const intl = useIntl()

  useEffect(() => {
    router.prefetch('/vendor/sign-up/request-sent')
  }, [router])

  return (
    <Stack alignItems={{ xs: 'center', md: 'flex-start' }} gap={2}>
      <Text className="title" variant="h4" color={({ palette }) => palette.grey[900]}>
        <FormattedMessage defaultMessage="Register as Vendor" id="signup.vendor.title" />
      </Text>

      <SwitchUserBanner
        title={intl.formatMessage({
          defaultMessage: 'Interested in Buying?',
          id: 'signup.vendor.switchToBuyer.title',
        })}
        icon={BuyerIcon}
        action={{
          href: '/sign-up',
          label: intl.formatMessage({
            defaultMessage: 'Become a Buyer',
            id: 'signup.vendor.switchToBuyer.link',
          }),
        }}
      />

      <CreateVendorForm />
    </Stack>
  )
}
