import { Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import { ListingModel } from '~/entities/listing'

import { Text } from '~/shared/components/base/Text'

interface Props {
  description: ListingModel['description']
}

export const DescriptionSection = ({ description }: Props) => {
  if (!description) return null

  return (
    <Stack gap={{ xs: 2, md: 3 }}>
      <Text variant="h6" color="grey.900">
        <FormattedMessage defaultMessage="Description" id="listingPage.description.title" />
      </Text>

      <Text variant="body4" color="grey.800">
        {description}
      </Text>
    </Stack>
  )
}
