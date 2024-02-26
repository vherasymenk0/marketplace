import { z } from 'zod'

import { ORDER_STATUSES_ENUM } from '../lib/data/order'

const OrderSchemaItemModel = z.object({
  quantity: z.number(),
  totalPrice: z.number(),
  id: z.number(),
  totalShippingCost: z.number(),
  title: z.string(),
  slug: z.string(),
  vendorName: z.string(),
  imageUrl: z.string().nullable(),
})

export const BaseOrderSchemaModel = z.object({
  id: z.number(),
  status: z.enum(ORDER_STATUSES_ENUM),
  createdAt: z.string(),
  totalPrice: z.number(),
  totalShippingCost: z.number(),
  orderItems: z.array(OrderSchemaItemModel),
})

const ContactInformation = z.object({
  fullName: z.string().optional(),
  companyName: z.string().optional(),
  email: z.string(),
  phone: z.string().nullable(),
})

const ShippingInformation = z.object({
  city: z.string(),
  address: z.string(),
  country: z.string(),
})

const OrderSchemaModel = BaseOrderSchemaModel.extend({
  contactInformations: ContactInformation,
  shippingInformation: ShippingInformation.optional(),
})

const meta = z.object({
  count: z.number(),
  page: z.number(),
  prev: z.number().nullable(),
  next: z.number().nullable(),
  last: z.number(),
})

export const OrdersSchemaResponse = z.object({
  orders: z.array(OrderSchemaModel),
  meta,
})

export const ChangeOrderStatusSchemaRequest = z
  .object({
    order: z.object({
      status: z.enum(ORDER_STATUSES_ENUM),
    }),
  })
  .strict()

export type OrderItemModel = z.infer<typeof OrderSchemaItemModel>

export type OrderModel = z.infer<typeof OrderSchemaModel>

export type OrdersResponse = z.infer<typeof OrderSchemaModel>

export type ChangeOrderStatusRequestData = z.infer<typeof ChangeOrderStatusSchemaRequest>
