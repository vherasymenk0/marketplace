import { Stack } from '@mui/material'

import { ShoppingCartModel } from '~/entities/cart'
import { getMainListingImage } from '~/entities/listing'

import { ItemCard } from './ItemCard/ItemCard'

interface Props {
  items: ShoppingCartModel['shoppingCart']['cartItems']
  onLoading: (isLoading: boolean) => void
}

export const ItemsList = ({ items, onLoading }: Props) => {
  return (
    <Stack gap={2}>
      {items.map(({ id, quantity, totalPrice, listing }) => (
        <ItemCard
          key={id}
          id={id}
          brand={listing.brand}
          image={getMainListingImage(listing.listingImages)}
          price={totalPrice}
          quantity={quantity}
          title={listing.title}
          vendorName={listing.vendor.companyName}
          slug={listing.slug}
          status={listing.status}
          onLoading={onLoading}
        />
      ))}
    </Stack>
  )
}
