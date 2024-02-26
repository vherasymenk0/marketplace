import { Box, Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import { MyListingsSearchParams } from '~/entities/listing'

import { Text } from '~/shared/components/base/Text'
import { useQueryParams } from '~/shared/hooks/useQueryParams'

import { useStyles } from './MyListingSearchEmptyState.styles'

const searchTips = [
  {
    defaultMessage: 'Check your search for typos',
    id: 'myListings.searchEmptyState.searchTips.tip1',
  },
  {
    defaultMessage: 'Try using individual words',
    id: 'myListings.searchEmptyState.searchTips.tip2',
  },
  {
    defaultMessage: 'Try searching for a less specific subject',
    id: 'myListings.searchEmptyState.searchTips.tip3',
  },
]

export const MyListingSearchEmptyState = () => {
  const styles = useStyles()

  const { parsedQueryParams } = useQueryParams<MyListingsSearchParams>()
  const searchQuery = parsedQueryParams?.filter_by_query ?? ''

  return (
    <Stack sx={styles.container}>
      <Text variant="subtitle3" color="grey.900">
        <FormattedMessage
          defaultMessage="We couldn’t find any matches for “{searchQuery}”"
          values={{ searchQuery }}
          id="myListings.searchEmptyState.title"
        />
      </Text>

      <Text variant="body4" mt={1.5} color="secondary.600">
        <FormattedMessage
          defaultMessage="Double check your search for any typos or spelling errors - or try a different search term."
          id="myListings.searchEmptyState.description"
        />
      </Text>

      <Text variant="subtitle3" mt={3} color="grey.900">
        <FormattedMessage
          defaultMessage="Search Tips"
          id="myListings.searchEmptyState.searchTips"
        />
      </Text>

      <Stack gap={1} mt={1.5} color="grey.600">
        {searchTips.map((tip) => (
          <Stack key={tip.id} direction="row" alignItems="center">
            <Box sx={styles.listDot} />

            <Text variant="body4">
              <FormattedMessage {...tip} />
            </Text>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}
