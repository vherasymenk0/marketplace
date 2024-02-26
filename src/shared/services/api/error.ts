import { isOfType } from '~/shared/helpers/isOfType'

export type ApiResponseError = { error: string } | { errors: Record<string, string[]> }

export class ApiError extends Error {
  error: string | { errors: Record<string, string[]> }

  constructor(error: ApiResponseError) {
    super('Server returned error')
    this.name = 'ApiError'

    const flatError = 'error' in error ? error.error : error
    this.error = flatError
  }
}

export const isApiError = (error: unknown): error is ApiResponseError =>
  isOfType.object<ApiResponseError>(error) && ('error' in error || 'errors' in error)
