'use client'

import { Stack } from '@mui/material'

import { OrderCard, OrderModel } from '~/entities/orders'

import { QueryPagination } from '~/shared/components/base/QueryPagination'

interface Props {
  orders: OrderModel[]
  pagesCount: number
}

export const VendorOrdersList = ({ orders, pagesCount }: Props) => {
  return (
    <>
      <Stack gap={2}>
        {orders.map(({ shippingInformation, ...order }) => {
          const formattedShippingInformation = `${shippingInformation?.address}, ${shippingInformation?.city}, ${shippingInformation?.country}`

          return (
            <OrderCard
              key={order.id}
              shippingInformation={formattedShippingInformation}
              isVendor
              {...order}
            />
          )
        })}
      </Stack>

      <QueryPagination sx={{ mt: 6 }} count={pagesCount} />
    </>
  )
}
