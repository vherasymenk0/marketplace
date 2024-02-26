import { Theme, useMediaQuery } from '@mui/material'
import { useIntl } from 'react-intl'

import { useCartActions } from '~/features/cart'
import { CURRENCY_FORMAT_OPTIONS } from '~/features/currency'

import { ShoppingCartItem } from '~/entities/cart'
import { LISTING_STATUSES } from '~/entities/listing'

import { ItemCardDesktop } from './ItemCardDesktop'
import { ItemCardMobile } from './ItemCardMobile'

interface Props {
  image: string
  title: ShoppingCartItem['title']
  brand: ShoppingCartItem['brand']
  vendorName: ShoppingCartItem['vendor']['companyName']
  quantity: number
  price: ShoppingCartItem['price']
  id: ShoppingCartItem['id']
  slug: ShoppingCartItem['slug']
  status: ShoppingCartItem['status']
  onLoading: (isLoading: boolean) => void
}

export const ItemCard = ({ price, id, status, onLoading, ...rest }: Props) => {
  const intl = useIntl()
  const { updateCartItemQuantity, removeCartItem } = useCartActions()
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  const formattedPrice = intl.formatNumber(price, { ...CURRENCY_FORMAT_OPTIONS })

  const handleRemoveItem = async () => {
    onLoading(true)
    await removeCartItem.mutateAsync(String(id))
    onLoading(false)
  }

  const handleQuantityChange = async (value: number | null) => {
    if (value) {
      onLoading(true)
      await updateCartItemQuantity.mutateAsync({ cartItemId: String(id), quantity: value })
      onLoading(false)
    }
  }

  const props = {
    price: formattedPrice,
    onQuantityChange: handleQuantityChange,
    onRemove: handleRemoveItem,
    id,
    isDeactivated: status === LISTING_STATUSES.deactivated,
    ...rest,
  }

  if (isMobile) return <ItemCardMobile {...props} />

  return <ItemCardDesktop {...props} />
}
