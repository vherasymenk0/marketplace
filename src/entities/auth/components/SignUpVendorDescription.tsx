'use client'

import { Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import { Text } from '~/shared/components/base/Text'

export const SignUpVendorDescription = () => {
  return (
    <Stack gap={2} sx={{ width: '75%' }} color="grey.200">
      <Text variant="h5" color="grey.50">
        <FormattedMessage
          id="signup.vendor.description.title"
          defaultMessage="Join Marketplace and Grow Your Business!"
        />
      </Text>

      <Text variant="body4">
        <FormattedMessage
          id="signup.vendor.description.subtitle1"
          defaultMessage="Unlock access to a vast market. Whether you specialize in our platform providing you with the visibility you need to expand your business."
        />
      </Text>

      <Text variant="body4">
        <FormattedMessage
          id="signup.vendor.description.subtitle2"
          defaultMessage="Our platform simplifies listing creation and management for auto parts, saving you time and effort."
        />
      </Text>

      <Text variant="body4">
        <FormattedMessage
          id="signup.vendor.description.subtitle3"
          defaultMessage="Reach a wider audience by offering your products on our platform. We provide the tools and support to enhance your sales and business growth."
        />
      </Text>
    </Stack>
  )
}
