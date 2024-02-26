import dynamic from 'next/dynamic'
import { useIntl } from 'react-intl'

import { CartMenuItem } from './CartMenuItem'
import { SidebarItem } from './SidebarItem'

const OrderIcon = dynamic(() =>
  import('~/shared/assets/icons/order.svg').then((mod) => mod.default),
)
const GarageIcon = dynamic(() =>
  import('~/shared/assets/icons/garage.svg').then((mod) => mod.default),
)

export const BuyerMobileMenu = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarItem
        href="/garage"
        icon={GarageIcon}
        title={intl.formatMessage({ id: 'mobileMenu.garage.btn', defaultMessage: 'Garage' })}
      />
      <CartMenuItem />
      <SidebarItem
        href="/orders"
        icon={OrderIcon}
        title={intl.formatMessage({ id: 'mobileMenu.orders.btn', defaultMessage: 'Orders' })}
        withBadge
      />
    </>
  )
}
