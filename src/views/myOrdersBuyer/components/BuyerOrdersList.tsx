'use client'

import { Stack } from '@mui/material'

import { OrderCard, OrderModel } from '~/entities/orders'

import { QueryPagination } from '~/shared/components/base/QueryPagination'

interface Props {
  orders: OrderModel[]
  pagesCount: number
}

export const BuyerOrdersList = ({ orders, pagesCount }: Props) => {
  return (
    <>
      <Stack gap={2}>
        {orders.map(({ shippingInformation: _, ...order }) => (
          <OrderCard key={order.id} {...order} />
        ))}
      </Stack>

      <QueryPagination sx={{ mt: 6 }} count={pagesCount} />
    </>
  )
}
