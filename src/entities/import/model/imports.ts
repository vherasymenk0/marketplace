import { z } from 'zod'

import { IMPORT_LISTING_STATUSES_ENUM } from '../lib/data/import'

const ImportListingSchemaRequest = z
  .object({
    listing_import: z.object({
      file: z.string(),
    }),
  })
  .strict()

const ImportListingStatusSchema = z.enum(IMPORT_LISTING_STATUSES_ENUM)

const meta = z.object({
  count: z.number(),
  page: z.number(),
  prev: z.number().nullable(),
  next: z.number().nullable(),
  last: z.number(),
})

const ImportListingSchemaModel = z.object({
  id: z.number(),
  slug: z.string(),
  filename: z.string(),
  status: ImportListingStatusSchema,
  createdAt: z.string(),
  importedCount: z.number(),
  failedCount: z.number(),
})

const ImportedDetails = z.object({
  id: z.number(),
  title: z.string(),
  partNumber: z.string(),
  originCountry: z.string(),
  brand: z.string(),
  partType: z.string(),
  price: z.number(),
  shippingCost: z.number(),
  description: z.string().nullable(),
})

const FailedDetails = z.object({
  rowNumber: z.number().nullable(),
  errorMessage: z.string().nullable(),
  partNumber: z.string().nullable(),
})

export const ImportListingsSchemaResponse = z.object({
  listingImports: z.array(ImportListingSchemaModel),
  meta,
})

export const ImportedDetailsSchemaResponse = z.object({
  importedListings: z.array(ImportedDetails),
  meta,
})

export const FailedDetailsSchemaResponse = z.object({
  failedListings: z.array(FailedDetails),
  meta,
})

export const ImportListingSchemaResponse = z.object({
  listingImport: ImportListingSchemaModel,
})

export type ListingImportModel = z.infer<typeof ImportListingSchemaModel>
export type ImportedDetailsModel = z.infer<typeof ImportedDetails>
export type FailedDetailsModel = z.infer<typeof FailedDetails>
export type ImportListingRequest = z.infer<typeof ImportListingSchemaRequest>
export type ImportListingStatus = Exclude<z.infer<typeof ImportListingStatusSchema>, 'in_progress'>
