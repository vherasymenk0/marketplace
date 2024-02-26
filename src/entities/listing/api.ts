import { api } from '~/shared/services/api'
import { ApiMethod, FlatRequestOptions, RequestOptions } from '~/shared/services/fetch'

import {
  EditListingRequest,
  ListingSchemaResponse,
  ListingsSchemaResponse,
  NewArrivalsSchemaResponse,
} from './model/listing'

export const getListings = async (options: FlatRequestOptions) => {
  const response = await api.get('api/v1/vendors/listings', { ...options })
  const dto = ListingsSchemaResponse.parse(response)

  return dto
}

export const getListing = async (listingId: string, options?: FlatRequestOptions) => {
  const response = await api.get(`api/v1/listings/${listingId}`, options)
  const { listing } = ListingSchemaResponse.parse(response)

  return listing
}

export const getVendorListingById = async (
  listingId: string,
  options: Pick<RequestOptions, 'authorizeToken'>,
) => {
  const response = await api.get(`api/v1/vendors/listings/${listingId}`, {
    ...options,
  })
  const { listing } = ListingSchemaResponse.parse(response)

  return listing
}

export const sendListingForApproval: ApiMethod<void, { id: string }> = async ({ id }, options) => {
  await api.post(`/api/v1/vendors/listings/${id}/send_for_approval`, { ...options })
}

export const sendAllListingForApproval: ApiMethod = async (options) => {
  await api.post('/api/v1/vendors/listings/bulk_send_for_approval', options)
}

export const editListing = async (
  listingId: number,
  data: EditListingRequest,
  options: FlatRequestOptions,
): Promise<void> => api.put(`api/v1/vendors/listings/${listingId}`, { data, ...options })

export const deleteListing: ApiMethod<void, { id: string }> = async ({ id }, options) => {
  await api.del(`/api/v1/vendors/listings/${id}`, { ...options })
}

export const getNewArrivals = async (options?: FlatRequestOptions) => {
  const response = await api.get('api/v1/new_arrivals', options)

  const { listings } = NewArrivalsSchemaResponse.parse(response)

  return listings
}

export const getBestSelling = async (options?: FlatRequestOptions) => {
  const response = await api.get('api/v1/best_selling', options)

  const { listings } = NewArrivalsSchemaResponse.parse(response)

  return listings
}

export const deactivateListing: ApiMethod<void, { id: string }> = async ({ id }, options) => {
  await api.post(`api/v1/vendors/listings/${id}/deactivate`, { ...options })
}

export const activateListing: ApiMethod<void, { id: string }> = async ({ id }, options) => {
  await api.post(`api/v1/vendors/listings/${id}/activate`, { ...options })
}
