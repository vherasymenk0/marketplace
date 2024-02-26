import { Box, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { SyntheticEvent } from 'react'
import { FormattedMessage } from 'react-intl'

import { LISTING_STATUSES, MyListingsSearchParams } from '~/entities/listing'

import { Text } from '~/shared/components/base/Text'
import { SEARCH_PARAMS } from '~/shared/constants/constants'
import { useQueryParams } from '~/shared/hooks/useQueryParams'

import { MyListingsAction } from '../MyListingsAction'

const TabsList = [
  {
    label: {
      defaultMessage: 'Active',
      id: 'vendor.myListings.activeTab',
    },
    value: LISTING_STATUSES.active,
  },
  {
    label: {
      defaultMessage: 'Draft',
      id: 'vendor.myListings.draftTab',
    },
    value: LISTING_STATUSES.draft,
  },
  {
    label: {
      defaultMessage: 'Pending Approval',
      id: 'vendor.myListings.approvalTab',
    },
    value: LISTING_STATUSES.pending,
  },
  {
    label: {
      defaultMessage: 'Deactivated',
      id: 'vendor.myListings.deactivatedTab',
    },
    value: LISTING_STATUSES.deactivated,
  },
]

interface Props {
  listingsCount: number
}

export const MyListingsHeader = ({ listingsCount }: Props) => {
  const { parsedQueryParams, setQueryParams } = useQueryParams<MyListingsSearchParams>()
  const status = parsedQueryParams?.filter_by_status ?? LISTING_STATUSES.active

  const handleChange = (_: SyntheticEvent<Element, Event>, value: string) => {
    setQueryParams({ [SEARCH_PARAMS.byStatus]: value }, true)
  }

  return (
    <Stack gap={4}>
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
        <Box>
          <Text variant="h6" color="grey.900">
            <FormattedMessage defaultMessage="My Listings" id="myListings.title" />
          </Text>

          <Text variant="body4" color={({ palette }) => palette.grey[600]} mt={1}>
            <FormattedMessage
              defaultMessage="{count} items"
              id="myListings.title"
              values={{ count: listingsCount }}
            />
          </Text>
        </Box>

        <MyListingsAction status={status} listingsCount={listingsCount} />
      </Stack>

      <ToggleButtonGroup value={status} exclusive onChange={handleChange}>
        {TabsList.map(({ label, value }) => (
          <ToggleButton key={value} value={value} color="primary">
            <Text variant="subtitle4">
              <FormattedMessage {...label} />
            </Text>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Stack>
  )
}
