import { Box, Stack } from '@mui/material'

import { ListingCard } from '~/widgets/ListingCard'

import { ListingModel, getMainListingImage } from '~/entities/listing'

import { QueryPagination } from '~/shared/components/base/QueryPagination'

import { MyListingSearchEmptyState } from '../MyListingSearchEmptyState'

interface Props {
  listings: ListingModel[]
  pagesCount: number
  isEmpty: boolean
}

export const MyListingsList = ({ listings, pagesCount, isEmpty }: Props) => {
  if (isEmpty) {
    return (
      <Box mt={1}>
        <MyListingSearchEmptyState />
      </Box>
    )
  }

  return (
    <>
      <Stack gap={3} mt={2}>
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            id={listing.id}
            slug={listing.slug}
            title={listing.title}
            description={listing.description}
            price={listing.price}
            shippingCost={listing.shippingCost}
            subcategory={listing.subcategory.name}
            category={listing.subcategory.category.name}
            rating={listing.rating}
            reviewCount={listing.reviewCount}
            originCountry={listing.originCountry}
            brand={listing.brand}
            partNumber={listing.partNumber}
            partType={listing.partType}
            imageSrc={getMainListingImage(listing.listingImages)}
            status={listing.status}
          />
        ))}
      </Stack>

      <QueryPagination sx={{ mt: 6 }} count={pagesCount} />
    </>
  )
}
