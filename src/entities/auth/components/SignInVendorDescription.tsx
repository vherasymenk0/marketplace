'use client'

import { Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import { Text } from '~/shared/components/base/Text'

export const SignInVendorDescription = () => {
  return (
    <Stack sx={{ width: '75%' }} color="grey.200">
      <Text variant="h5" color="grey.50">
        <FormattedMessage
          id="signup.vendor.description.title"
          defaultMessage="Join Marketplace and Grow Your Business!"
        />
      </Text>

      <Text variant="body4" mt={3}>
        <FormattedMessage
          id="signin.vendor.description.subtitle1"
          defaultMessage="We've designed the Nextor Marketplace to make it possible for vendors to conveniently offer an extensive selection of top-quality automotive products that are tailored to meet the demands of auto enthusiasts - buyers."
        />
      </Text>
    </Stack>
  )
}
