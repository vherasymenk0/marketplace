'use client'

import { Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import { Text } from '~/shared/components/base/Text'

export const SignInBuyerDescription = () => {
  return (
    <Stack maxWidth={288}>
      <Stack>
        <Text variant="h5" mb={3} color="grey.50">
          <FormattedMessage
            id="buyer.signin.title"
            defaultMessage="Unlock the World of Auto Parts"
          />
        </Text>
        <Text variant="body4" color="grey.200">
          <FormattedMessage
            id="buyer.signin.description"
            defaultMessage="We've designed the Nextor Marketplace to make it possible for vendors to conveniently offer an extensive selection of top-quality automotive products that are tailored to meet the demands of auto enthusiasts - buyers."
          />
        </Text>
      </Stack>
    </Stack>
  )
}
