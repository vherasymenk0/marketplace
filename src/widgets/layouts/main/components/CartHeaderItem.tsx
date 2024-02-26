import dynamic from 'next/dynamic'
import { useIntl } from 'react-intl'

import { useShoppingCartCountQuery } from '~/entities/cart'

import { HeaderItem } from './HeaderItem'

const CartSVG = dynamic(() => import('~/shared/assets/icons/cart.svg').then((mod) => mod.default))

export const CartHeaderItem = () => {
  const intl = useIntl()
  const { productsCount } = useShoppingCartCountQuery()

  return (
    <HeaderItem
      icon={<CartSVG />}
      href="/cart"
      title={intl.formatMessage({ id: 'header.cart.btn', defaultMessage: 'Cart' })}
      withBadge={productsCount !== 0}
    />
  )
}
