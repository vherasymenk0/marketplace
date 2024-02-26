import { z } from 'zod'

import { CurrenciesRatesSchema } from '~/entities/currency'
import { LISTING_STATUSES_ENUM, ListingImagesModel } from '~/entities/listing'

/**
 * Models
 */
export const ShoppingCartItemSchema = z.object({
  brand: z.string(),
  id: z.number(),
  listingImages: z.array(ListingImagesModel),
  price: z.number(),
  shippingCost: z.number(),
  slug: z.string(),
  status: z.enum(LISTING_STATUSES_ENUM),
  title: z.string(),
  vendor: z.object({
    id: z.number().nullable(),
    companyName: z.string().nullable(),
  }),
})

export const ShoppingCartSchemaResponse = z.object({
  shoppingCart: z.object({
    totalPrice: z.number(),
    totalShippingCost: z.number(),
    total: CurrenciesRatesSchema,
    productsCount: z.number(),
    itemsCount: z.number(),
    cartItems: z.array(
      z.object({
        id: z.number(),
        quantity: z.number(),
        totalPrice: z.number(),
        totalShippingCost: z.number(),
        total: z.number(),
        listing: ShoppingCartItemSchema,
      }),
    ),
  }),
})

export const ShoppingCartCountSchemaResponse = z.object({
  products_count: z.number(),
})

/**
 * Requests
 */
export const AddShoppingCartItemSchemaRequest = z
  .object({
    cart_item: z.object({
      listing_id: z.string(),
      quantity: z.number(),
    }),
  })
  .strict()

export const UpdateShoppingCartItemSchemaRequest = z
  .object({
    cart_item: z.object({
      quantity: z.number(),
    }),
  })
  .strict()

/**
 * Types
 */
export type ShoppingCartItem = z.infer<typeof ShoppingCartItemSchema>
export type ShoppingCartModel = z.infer<typeof ShoppingCartSchemaResponse>

export type AddShoppingCartRequestData = z.infer<typeof AddShoppingCartItemSchemaRequest>
export type UpdateShoppingCartRequestData = z.infer<typeof UpdateShoppingCartItemSchemaRequest>
