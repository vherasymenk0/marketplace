import dynamic from 'next/dynamic'
import { useIntl } from 'react-intl'

import { SidebarItem } from './SidebarItem'

const OrdersIcon = dynamic(() =>
  import('~/shared/assets/icons/order.svg').then((mod) => mod.default),
)
const ListingIcon = dynamic(() =>
  import('~/shared/assets/icons/listings.svg').then((mod) => mod.default),
)
const ImportsIcon = dynamic(() =>
  import('~/shared/assets/icons/imports.svg').then((mod) => mod.default),
)

export const VendorMobileMenu = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarItem
        href="/vendor/my-listings"
        icon={ListingIcon}
        title={intl.formatMessage({
          id: 'mobileMenu.listings.btn',
          defaultMessage: 'Listings',
        })}
      />
      <SidebarItem
        href="/vendor/my-imports"
        icon={ImportsIcon}
        title={intl.formatMessage({ id: 'mobileMenu.imports.btn', defaultMessage: 'Imports' })}
      />
      <SidebarItem
        href="/vendor/orders"
        icon={OrdersIcon}
        title={intl.formatMessage({
          id: 'mobileMenu.orders.btn',
          defaultMessage: 'Orders',
        })}
        withBadge
      />
    </>
  )
}
