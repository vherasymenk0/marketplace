import { api } from '~/shared/services/api'
import { ApiMethod } from '~/shared/services/fetch'

import { BuyerModel, BuyerSchemaRequest } from './model/buyer'
import { VendorModel, VendorSchemaRequest } from './model/vendor'

export const getBuyerData: ApiMethod<BuyerModel> = async (options) => {
  const response = await api.get('api/v1/users/profile', options)

  const { user } = BuyerSchemaRequest.parse(response)

  return user
}

export const getVendorData: ApiMethod<VendorModel> = async (options) => {
  const response = await api.get('api/v1/vendors/profile', options)

  const { vendor } = VendorSchemaRequest.parse(response)

  return vendor
}
