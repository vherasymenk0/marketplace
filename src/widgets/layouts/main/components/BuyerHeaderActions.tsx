import { Stack } from '@mui/material'
import dynamic from 'next/dynamic'
import { useIntl } from 'react-intl'

import { CSSHide } from '~/shared/components/base/CSSHide'

import { CartHeaderItem } from './CartHeaderItem'
import { HeaderItem } from './HeaderItem'
import { ProfileButton } from './ProfileButton'

const OrderIcon = dynamic(() =>
  import('~/shared/assets/icons/order.svg').then((mod) => mod.default),
)
const GarageIcon = dynamic(() =>
  import('~/shared/assets/icons/garage.svg').then((mod) => mod.default),
)

export const BuyerHeaderActions = () => {
  const intl = useIntl()

  return (
    <>
      <CSSHide screen="desktop">
        <CartHeaderItem />
      </CSSHide>

      <CSSHide screen="mobile">
        <Stack flexDirection="row" gap={{ xs: 2, md: 4 }}>
          <HeaderItem
            icon={<GarageIcon />}
            href="/garage"
            title={intl.formatMessage({ id: 'header.garage.btn', defaultMessage: 'Garage' })}
          />

          <CartHeaderItem />

          <HeaderItem
            icon={<OrderIcon />}
            href="/orders"
            title={intl.formatMessage({ id: 'header.orders.btn', defaultMessage: 'Orders' })}
            withBadge
          />
          <ProfileButton />
        </Stack>
      </CSSHide>
    </>
  )
}
