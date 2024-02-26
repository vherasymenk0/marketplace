import { Stack } from '@mui/material'
import dynamic from 'next/dynamic'
import { useIntl } from 'react-intl'

import { CSSHide } from '~/shared/components/base/CSSHide'

import { HeaderItem } from './HeaderItem'
import { ProfileButton } from './ProfileButton'

const ListingsIcon = dynamic(() =>
  import('~/shared/assets/icons/listings.svg').then((mod) => mod.default),
)
const OrderIcon = dynamic(() =>
  import('~/shared/assets/icons/order.svg').then((mod) => mod.default),
)
const ImportsIcon = dynamic(() =>
  import('~/shared/assets/icons/imports.svg').then((mod) => mod.default),
)

export const VendorHeaderActions = () => {
  const intl = useIntl()

  return (
    <>
      <CSSHide screen="desktop">
        <HeaderItem
          icon={<OrderIcon />}
          href="/orders"
          title={intl.formatMessage({ id: 'header.orders.btn', defaultMessage: 'Orders' })}
          withBadge
        />
      </CSSHide>

      <CSSHide screen="mobile">
        <Stack flexDirection="row" gap={{ xs: 2, md: 4 }}>
          <HeaderItem
            icon={<ListingsIcon />}
            href="/vendor/my-listings"
            title={intl.formatMessage({ id: 'header.listings.btn', defaultMessage: 'Listings' })}
          />
          <HeaderItem
            icon={<ImportsIcon />}
            href="/vendor/my-imports"
            title={intl.formatMessage({ id: 'header.imports.btn', defaultMessage: 'Imports' })}
          />
          <HeaderItem
            icon={<OrderIcon />}
            href="/vendor/orders"
            title={intl.formatMessage({ id: 'header.orders.btn', defaultMessage: 'Orders' })}
            withBadge
          />
          <ProfileButton />
        </Stack>
      </CSSHide>
    </>
  )
}
