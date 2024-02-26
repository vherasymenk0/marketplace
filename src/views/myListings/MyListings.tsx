'use client'

import { Container, Stack } from '@mui/material'

import { QueryListSearch } from '~/widgets/QueryListSearch'
import { QueryListSorting } from '~/widgets/QueryListSorting'

import { LISTING_SORT_OPTIONS, ListingModel, MyListingsSearchParams } from '~/entities/listing'

import { useQueryParams } from '~/shared/hooks/useQueryParams'

import { MyListingsEmptyState } from './components/MyListingsEmptyState'
import { MyListingsHeader } from './components/MyListingsHeader'
import { MyListingsList } from './components/MyListingsList'

interface Props {
  listings: ListingModel[]
  itemsCount: number
  pagesCount: number
}

export const MyListings = ({ listings, pagesCount, itemsCount }: Props) => {
  const { parsedQueryParams } = useQueryParams<MyListingsSearchParams>()

  const currentTab = parsedQueryParams?.filter_by_status
  const isSearch = !!parsedQueryParams?.filter_by_query
  const isEmpty = itemsCount === 0

  return (
    <Container sx={{ mt: { xs: 5, md: 8 }, mb: 14 }}>
      <Stack sx={{ maxWidth: 1016, margin: '0 auto' }}>
        <MyListingsHeader listingsCount={itemsCount} />

        {isEmpty && !isSearch ? (
          <MyListingsEmptyState currentTab={currentTab} />
        ) : (
          <>
            <Stack direction="row" mt={4} gap={{ xs: 1, md: 3 }}>
              <QueryListSearch />

              <QueryListSorting sortParams={LISTING_SORT_OPTIONS} />
            </Stack>

            <MyListingsList listings={listings} pagesCount={pagesCount} isEmpty={isEmpty} />
          </>
        )}
      </Stack>
    </Container>
  )
}
