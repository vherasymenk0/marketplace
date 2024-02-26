import { api } from '~/shared/services/api'
import { FlatRequestOptions } from '~/shared/services/fetch'

import { CurrenciesSchemaResponse } from './model'

export const getCurrencies = async (options: FlatRequestOptions) => {
  const response = await api.get('api/v1/currencies', options)

  const { currencies } = CurrenciesSchemaResponse.parse(response)

  return currencies
}
