'use client'

import { Stack } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'

import { CreateBuyerForm } from '~/features/auth'

import VendorIcon from '~/shared/assets/icons/vendor-icon.svg'
import { Text } from '~/shared/components/base/Text'
import { SwitchUserBanner } from '~/shared/components/common/SwitchUserBanner'

export const CreateBuyerAccount = () => {
  const router = useRouter()
  const intl = useIntl()

  useEffect(() => {
    router.prefetch('/sign-up/verify-email')
  }, [router])

  return (
    <Stack alignItems={{ xs: 'center', md: 'flex-start' }}>
      <Text variant="h4" mt={{ xs: 3 }} color="grey.900">
        <FormattedMessage id="buyer.signup.createAccount" defaultMessage="Create Account" />
      </Text>
      <Stack mt={2} mb={{ xs: 3, md: 4 }} width="100%">
        <SwitchUserBanner
          title={intl.formatMessage({
            defaultMessage: 'Interested in Selling?',
            id: 'buyer.signup.banner.title',
          })}
          icon={VendorIcon}
          action={{
            href: '/vendor/sign-up',
            label: intl.formatMessage({
              defaultMessage: 'Become a Vendor',
              id: 'buyer.signup.banner.link',
            }),
          }}
        />
      </Stack>
      <CreateBuyerForm />
    </Stack>
  )
}
