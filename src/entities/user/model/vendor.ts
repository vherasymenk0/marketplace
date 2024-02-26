import { z } from 'zod'

import { COUNTRY_OPTIONS } from '~/shared/constants/options'

export const VendorSchemaModel = z.object({
  id: z.number(),
  approved: z.boolean(),
  companyName: z.string(),
  country: z.enum(COUNTRY_OPTIONS),
  email: z.string(),
  fullName: z.string(),
  phone: z.string(),
  slug: z.string(),
  type: z.literal('vendor'),
})

export const VendorSchemaRequest = z.object({
  vendor: VendorSchemaModel,
})

export type VendorModel = z.infer<typeof VendorSchemaModel>
export type VendorSchemaRequest = z.infer<typeof VendorSchemaRequest>
