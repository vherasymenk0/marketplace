import { api } from '~/shared/services/api'
import { FlatRequestOptions } from '~/shared/services/fetch'

import {
  AddShoppingCartRequestData,
  ShoppingCartCountSchemaResponse,
  ShoppingCartSchemaResponse,
  UpdateShoppingCartRequestData,
} from './model'

/**
 * BUYER
 */
export const getShoppingCart = async (options: Pick<FlatRequestOptions, 'authorizeToken'>) => {
  const response = await api.get(`api/v1/users/shopping_cart`, options)
  const dto = ShoppingCartSchemaResponse.parse(response)

  return dto
}

export const getShoppingCountCart = async (options: Pick<FlatRequestOptions, 'authorizeToken'>) => {
  const response = await api.get(`api/v1/users/shopping_cart/products_count`, options)
  const dto = ShoppingCartCountSchemaResponse.parse(response)

  return dto
}

export const addShoppingCartItem = async (
  data: AddShoppingCartRequestData,
  options: Pick<FlatRequestOptions, 'authorizeToken'>,
) => api.post('api/v1/users/shopping_cart/cart_items', { data, ...options })

export const updateShoppingCartItem = async (
  id: string,
  data: UpdateShoppingCartRequestData,
  options: Pick<FlatRequestOptions, 'authorizeToken'>,
) => api.put(`api/v1/users/shopping_cart/cart_items/${id}`, { data, ...options })

export const removeShoppingCartItem = async (
  id: string,
  options: Pick<FlatRequestOptions, 'authorizeToken'>,
) => api.del(`api/v1/users/shopping_cart/cart_items/${id}`, options)

/**
 * VISITOR
 */
export const getVisitorShoppingCart = async (options: Pick<FlatRequestOptions, 'visitorToken'>) => {
  const response = await api.get('api/v1/visitors/shopping_cart', options)
  const dto = ShoppingCartSchemaResponse.parse(response)

  return dto
}

export const getVisitorShoppingCountCart = async (
  options: Pick<FlatRequestOptions, 'visitorToken'>,
) => {
  const response = await api.get('api/v1/visitors/shopping_cart/products_count', options)
  const dto = ShoppingCartCountSchemaResponse.parse(response)

  return dto
}

export const addVisitorShoppingCartItem = async (
  data: AddShoppingCartRequestData,
  options: Pick<FlatRequestOptions, 'visitorToken'>,
) => api.post('api/v1/visitors/shopping_cart/cart_items', { data, ...options })

export const updateVisitorShoppingCartItem = async (
  id: string,
  data: UpdateShoppingCartRequestData,
  options: Pick<FlatRequestOptions, 'visitorToken'>,
) => api.put(`api/v1/visitors/shopping_cart/cart_items/${id}`, { data, ...options })

export const removeVisitorShoppingCartItem = async (
  id: string,
  options: Pick<FlatRequestOptions, 'visitorToken'>,
) => api.del(`api/v1/visitors/shopping_cart/cart_items/${id}`, options)
