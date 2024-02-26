import { z } from 'zod'

import { CurrenciesRatesSchema } from '~/entities/currency'

import { BaseCategorySchema } from '../../category/index'
import { LISTING_STATUSES_ENUM } from '../lib/data/listing'

const PartAttributesModel = z.object({
  name: z.string(),
  value: z.string(),
})

export const ListingImagesModel = z.object({
  id: z.string().or(z.number()),
  imageUrl: z.string(),
  position: z.number(),
  imageData: z.string().optional(),
})

export const ListingSchemaModel = z.object({
  id: z.number(),
  brand: z.string(),
  description: z.string().nullable(),
  listingImages: z.array(ListingImagesModel),
  originCountry: z.string(),
  partAttributes: z.array(PartAttributesModel).nullable(),
  partNumber: z.string(),
  partType: z.string(),
  price: CurrenciesRatesSchema,
  ordered: z.boolean().optional(),
  rating: z.number(),
  reviewCount: z.number(),
  subcategory: BaseCategorySchema.extend({
    category: BaseCategorySchema,
  }),
  shippingCost: z.number(),
  slug: z.string(),
  status: z.enum(LISTING_STATUSES_ENUM),
  title: z.string(),
  vendor: z
    .object({
      id: z.number().nullable(),
      companyName: z.string().nullable(),
    })
    .optional(),
})

export const ListingsSchemaResponse = z.object({
  meta: z.object({
    count: z.number(),
    page: z.number(),
    prev: z.number().nullable(),
    next: z.number().nullable(),
    last: z.number(),
  }),
  listings: z.array(ListingSchemaModel),
})

export const NewArrivalsSchemaResponse = z.object({
  listings: z.array(
    ListingSchemaModel.pick({
      id: true,
      slug: true,
      title: true,
      price: true,
      shippingCost: true,
      listingImages: true,
    }),
  ),
})

export const ListingSchemaResponse = z.object({
  listing: ListingSchemaModel,
})

export const GetListingSchemaRequest = z.object({
  id: z.string(),
})

export const EditListingSchemaRequest = z
  .object({
    listing: z.object({
      price: z.number(),
      shipping_cost: z.number(),
      description: z.string().nullable(),
      listing_images_attributes: z.any().nullable(),
    }),
  })
  .strict()

export type ListingModel = z.infer<typeof ListingSchemaModel>
export type NewArrivalsModel = z.infer<typeof NewArrivalsSchemaResponse>
export type ListingsResponse = z.infer<typeof ListingsSchemaResponse>

export type GetListingRequest = z.infer<typeof GetListingSchemaRequest>
export type EditListingRequest = z.infer<typeof EditListingSchemaRequest>
