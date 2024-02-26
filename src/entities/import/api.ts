import { api } from '~/shared/services/api'
import { FlatRequestOptions } from '~/shared/services/fetch'

import {
  FailedDetailsSchemaResponse,
  ImportListingRequest,
  ImportListingSchemaResponse,
  ImportListingsSchemaResponse,
  ImportedDetailsSchemaResponse,
} from './model/imports'

export const getImportListings = async (options: FlatRequestOptions) => {
  const response = await api.get('api/v1/vendors/listing_imports', { ...options })
  const dto = ImportListingsSchemaResponse.parse(response)

  return dto
}

export const getImportListingBySlug = async (slug: string, options: FlatRequestOptions) => {
  const response = await api.get(`api/v1/vendors/listing_imports/${slug}`, { ...options })
  const dto = ImportListingSchemaResponse.parse(response)

  return dto
}

export const getImportedDetails = async (slug: string, options: FlatRequestOptions) => {
  const response = await api.get(`api/v1/vendors/listing_imports/${slug}/imported_listings`, {
    ...options,
  })
  const dto = ImportedDetailsSchemaResponse.parse(response)

  return dto
}

export const getFailedDetails = async (slug: string, options: FlatRequestOptions) => {
  const response = await api.get(`api/v1/vendors/listing_imports/${slug}/failed_listings`, {
    ...options,
  })
  const dto = FailedDetailsSchemaResponse.parse(response)

  return dto
}

export const importListing = async (
  data: ImportListingRequest,
  options: FlatRequestOptions,
): Promise<void> => api.post('api/v1/vendors/listing_imports', { data, ...options })
