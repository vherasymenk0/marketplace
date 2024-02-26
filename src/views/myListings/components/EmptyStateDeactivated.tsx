import { Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import { Text } from '~/shared/components/base/Text'

export const EmptyStateDeactivated = () => {
  return (
    <Stack spacing={2}>
      <Text variant="h6" color="grey.900">
        <FormattedMessage defaultMessage="No Listings Found" id="myListings.emptyState.title" />
      </Text>

      <Text variant="body3" color="grey.600">
        <FormattedMessage
          defaultMessage="On this tab, you'll find listings that have been deactivated by your choice."
          id="myListings.emptyState.deactivated.description"
        />
      </Text>
    </Stack>
  )
}
