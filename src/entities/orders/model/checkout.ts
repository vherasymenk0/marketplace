import { z } from 'zod'

import { CurrenciesRatesSchema } from '~/entities/currency'

const OrderSummaryItemModel = z.object({
  cost: z.number(),
  shipping_cost: z.number(),
})

const OrderSummaryModel = z.object({
  total: CurrenciesRatesSchema,
  total_exchanged: z.number(),
  items: z.array(OrderSummaryItemModel),
})

const OrderItemModel = z.object({
  imageUrl: z.string().nullable(),
  quantity: z.number(),
  slug: z.string(),
  title: z.string(),
  totalPrice: z.number(),
  vendorName: z.string(),
})

const OrderModel = z.object({
  id: z.number(),
  status: z.string(),
  orderItems: z.array(OrderItemModel),
})

export const CheckoutOrdersSchemaResponse = z.object({
  checkout: z.object({
    orderSummary: OrderSummaryModel,
    orders: z.array(OrderModel),
  }),
})

export const CheckoutOrdersSchemaRequest = z.object({
  checkout: z.object({
    contact_information: z.object({
      full_name: z.string(),
      phone: z.string(),
      email: z.string(),
    }),
    shipping_information: z.object({
      country: z.string(),
      city: z.string(),
      address: z.string(),
    }),
  }),
})

export type CheckoutOrderSummaryModel = z.infer<typeof OrderSummaryModel>
export type CheckoutOrderModel = z.infer<typeof OrderModel>
export type CheckoutOrderItemModel = z.infer<typeof OrderItemModel>
export type CheckoutOrdersSchemaRequest = z.infer<typeof CheckoutOrdersSchemaRequest>
