import { appConfig } from '@config/app'

import { Fetch } from '~/shared/services/fetch'

import { ApiError, isApiError } from './error'

export const api = new Fetch({
  baseURL: appConfig.apiURL,
  headers: {
    'content-type': 'application/json',
  },
  handleError: (responseError) => {
    if (isApiError(responseError)) {
      throw new ApiError(responseError)
    } else {
      throw responseError
    }
  },
})
