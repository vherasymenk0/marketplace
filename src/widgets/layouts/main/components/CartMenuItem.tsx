import { SxProps } from '@mui/material'
import dynamic from 'next/dynamic'
import { useIntl } from 'react-intl'

import { useShoppingCartCountQuery } from '~/entities/cart'

import { SidebarItem } from './SidebarItem'

const CartSVG = dynamic(() => import('~/shared/assets/icons/cart.svg').then((mod) => mod.default))

interface Props {
  sx?: SxProps
}

export const CartMenuItem = ({ sx }: Props) => {
  const intl = useIntl()
  const { productsCount } = useShoppingCartCountQuery()

  return (
    <SidebarItem
      href="/cart"
      icon={CartSVG}
      title={intl.formatMessage({ id: 'mobileMenu.cart.btn', defaultMessage: 'Cart' })}
      withBadge={productsCount !== 0}
      sx={sx}
    />
  )
}
