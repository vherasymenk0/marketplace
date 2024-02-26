import { Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import { Text } from '~/shared/components/base/Text'

export const EmptyStateApproval = () => {
  return (
    <Stack spacing={2}>
      <Text variant="h6" color="grey.900">
        <FormattedMessage defaultMessage="No Listings Found" id="myListings.emptyState.title" />
      </Text>

      <Text variant="body3" color="grey.600">
        <FormattedMessage
          defaultMessage="To showcase your listings, head to the Draft tab, and submit them for approval."
          id="myListings.emptyState.approval.subtitle"
        />
      </Text>

      <Text variant="body3" color="grey.600">
        <FormattedMessage
          defaultMessage="Please note that this step is crucial to have your listings featured in this section and ready for potential buyers."
          id="myListings.emptyState.approval.description"
        />
      </Text>
    </Stack>
  )
}
