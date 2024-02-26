'use client'

import { Container } from '@mui/material'
import { useIntl } from 'react-intl'

import { MyOrdersHeader, OrderModel } from '~/entities/orders'

import { EmptyState } from '~/shared/components/common/EmptyState'

import { VendorOrdersList } from './components/VendorOrdersList'

interface Props {
  orders: OrderModel[]
  pagesCount: number
  itemsCount: number
}

export const MyOrdersVendor = ({ orders, pagesCount, itemsCount }: Props) => {
  const intl = useIntl()
  const isEmpty = itemsCount === 0

  return (
    <Container sx={{ mt: { xs: 5, md: 8 }, mb: 14 }}>
      <MyOrdersHeader itemsCount={itemsCount} isVendor />

      {isEmpty ? (
        <EmptyState
          title={intl.formatMessage({
            defaultMessage: 'No Orders Yet',
            id: 'vendorOrders.emptyState.title',
          })}
          description={intl.formatMessage({
            defaultMessage:
              'Currently, your order page is empty, indicating that no one has purchased your products. Consider reviewing your product listings, implementing marketing strategies, or offering promotions to attract customers and generate sales',
            id: 'vendorOrders.emptyState.description',
          })}
        />
      ) : (
        <VendorOrdersList orders={orders} pagesCount={pagesCount} />
      )}
    </Container>
  )
}
