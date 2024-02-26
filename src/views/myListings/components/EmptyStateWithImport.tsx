import { Stack, Theme, useMediaQuery } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import { Button } from '~/shared/components/base/Button'
import { Text } from '~/shared/components/base/Text'

export const EmptyStateWithImport = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <>
      <Stack spacing={2}>
        <Text variant="h6" color="grey.900">
          <FormattedMessage defaultMessage="No Listings Found" id="myListings.emptyState.title" />
        </Text>

        <Text variant="body3" color="grey.600">
          <FormattedMessage
            defaultMessage="Begin by importing your listings to start your selling journey."
            id="myListings.emptyState.subtitle"
          />
        </Text>
      </Stack>

      {isMobile ? (
        <Text variant="body3" color="grey.600" mt={2}>
          <FormattedMessage
            defaultMessage="Please note that you can only import listings from a computer."
            id="myListings.emptyState.mobileDescription"
          />
        </Text>
      ) : (
        <Button sx={{ mt: 4, width: 200, alignSelf: 'center' }} href="/vendor/import-listing">
          <FormattedMessage defaultMessage="Import Listings" id="myListings.emptyState.importBtn" />
        </Button>
      )}
    </>
  )
}
