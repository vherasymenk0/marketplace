'use client'

import { Container } from '@mui/material'
import { useIntl } from 'react-intl'

import { MyOrdersHeader, OrderModel } from '~/entities/orders'

import { EmptyState } from '~/shared/components/common/EmptyState'

import { BuyerOrdersList } from './components/BuyerOrdersList'

interface Props {
  orders: OrderModel[]
  pagesCount: number
  itemsCount: number
}

export const MyOrdersBuyer = ({ orders, pagesCount, itemsCount }: Props) => {
  const intl = useIntl()
  const isEmpty = itemsCount === 0

  return (
    <Container sx={{ mt: { xs: 5, md: 8 }, mb: 14 }}>
      <MyOrdersHeader itemsCount={itemsCount} />

      {isEmpty ? (
        <EmptyState
          title={intl.formatMessage({
            defaultMessage: 'No Orders Yet',
            id: 'buyerOrders.emptyState.title',
          })}
          description={intl.formatMessage({
            defaultMessage:
              "It seems like you haven't placed any orders with us yet. Your Orders page is currently empty. If you're ready to start shopping, browse our selection of products and add items to your cart.",
            id: 'buyerOrders.emptyState.description',
          })}
        />
      ) : (
        <BuyerOrdersList orders={orders} pagesCount={pagesCount} />
      )}
    </Container>
  )
}
