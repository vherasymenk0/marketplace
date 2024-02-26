import { Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import { NewArrivalsModel, getMainListingImage } from '~/entities/listing'

import { CSSHide } from '~/shared/components/base/CSSHide'
import { Text } from '~/shared/components/base/Text'
import { Slider } from '~/shared/components/common/Slider'

import { ListingCard } from '../ListingCard'

import 'keen-slider/keen-slider.min.css'

interface Props {
  listings: NewArrivalsModel['listings']
}
export const NewArrivalsSection = ({ listings }: Props) => {
  if (!listings) return null

  return (
    <Stack gap={4} mt={10}>
      <Text variant="h6" color="grey.900">
        <FormattedMessage defaultMessage="New Arrivals" id="homePage.newArrivalsSection.title" />
      </Text>

      <CSSHide screen="mobile">
        <Stack direction={{ xs: 'column', md: 'row' }} gap={3}>
          {listings.map((listing) => (
            <ListingCard
              key={listing.id}
              id={listing.id}
              slug={listing.slug}
              image={getMainListingImage(listing.listingImages)}
              price={listing.price}
              shippingCost={listing.shippingCost}
              title={listing.title}
            />
          ))}
        </Stack>
      </CSSHide>

      <CSSHide screen="desktop">
        <Slider
          keyExtractor={({ slug }) => slug}
          data={listings}
          withDots
          renderSlide={({ title, slug, id, listingImages, price, shippingCost }) => {
            return (
              <ListingCard
                slug={slug}
                id={id}
                image={getMainListingImage(listingImages)}
                price={price}
                shippingCost={shippingCost}
                title={title}
              />
            )
          }}
        />
      </CSSHide>
    </Stack>
  )
}
