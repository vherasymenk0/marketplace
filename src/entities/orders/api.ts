import { api } from '~/shared/services/api'
import { FlatRequestOptions } from '~/shared/services/fetch'

import { CheckoutOrdersSchemaRequest, CheckoutOrdersSchemaResponse } from './model/checkout'
import { ChangeOrderStatusRequestData, OrdersSchemaResponse } from './model/order'

export const getCheckoutOrders = async (options: FlatRequestOptions) => {
  const response = await api.get('api/v1/users/checkout', { ...options })

  const dto = CheckoutOrdersSchemaResponse.parse(response)

  return dto
}

export const createCheckoutOrders = async (
  data: CheckoutOrdersSchemaRequest,
  options: FlatRequestOptions,
): Promise<void> => api.post('api/v1/users/checkout', { data, ...options })

export const createOrders = async (options: FlatRequestOptions): Promise<void> =>
  api.post('api/v1/users/orders', { ...options })

export const getBuyerOrders = async (options: FlatRequestOptions) => {
  const response = await api.get('api/v1/users/orders', { ...options })
  const dto = OrdersSchemaResponse.parse(response)

  return dto
}
export const getVendorOrders = async (options: FlatRequestOptions) => {
  const response = await api.get('api/v1/vendors/orders', { ...options })
  const dto = OrdersSchemaResponse.parse(response)

  return dto
}

export const changeOrderStatus = (
  id: number,
  data: ChangeOrderStatusRequestData,
  options: FlatRequestOptions,
) => api.put(`/api/v1/vendors/orders/${id}`, { data, ...options })
