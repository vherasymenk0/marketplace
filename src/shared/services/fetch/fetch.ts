import {
  Config,
  FetchUrl,
  FlatRequestOptions,
  FullRequestOptions,
  FullResponse,
  InterceptorError,
  Interceptors,
  Method,
  RequestInterceptor,
  RequestOptions,
  ResponseInterceptor,
} from './fetch.types'
import { stringifyQueryParams } from './queryParams'

const getResponseData = async <ResponseData>(response: Response) => {
  let data: ResponseData
  try {
    // Empty response will produce the error
    data = (await response.json()) as ResponseData
  } catch (error) {
    data = null as ResponseData
  }

  return data
}

class FetchApi {
  private config: Config
  private interceptors: Interceptors = { request: [], response: [] }

  constructor(config?: Config) {
    this.config = config ?? {}
  }

  private handleSuccessRequestInterceptors = () => {
    return this.interceptors.request.reduce((prevConfig, interceptor) => {
      if (!interceptor.onSuccess) return prevConfig

      return interceptor.onSuccess(prevConfig)
    }, this.config)
  }

  private handleSuccessResponseInterceptors = async (response: Response) => {
    await this.interceptors.response.reduce(async (prevResponse, interceptor) => {
      if (!interceptor.onSuccess) return prevResponse

      const responseSuccess = await prevResponse
      return interceptor.onSuccess(responseSuccess)
    }, Promise.resolve(response))
  }

  private handleRequestErrorInterceptors = async (error: unknown) => {
    await this.interceptors.request.reduce(async (prevError, interceptor) => {
      if (!interceptor.onError) return prevError

      const responseError = await prevError
      return interceptor.onError(responseError)
    }, error)
  }

  private handleResponseErrorInterceptors = async (
    error: InterceptorError | Promise<InterceptorError>,
  ) => {
    return this.interceptors.response.reduce(async (prevError, interceptor) => {
      if (!interceptor.onError) return prevError

      const responseError = await prevError
      return interceptor.onError(responseError)
    }, error)
  }

  private makeRequest = async <ResponseData>(
    method: Method,
    url: FetchUrl,
    options?: RequestOptions,
  ) => {
    const { baseURL, handleError, ...requestConfig } = this.config

    const {
      data: requestData,
      authorizeToken,
      visitorToken,
      isFullResponse,
      params,
      ...requestOptions
    } = options ?? {}

    const requestRootURL = baseURL ? `${baseURL}/${url}` : url
    const endURL = params ? `${requestRootURL}${stringifyQueryParams(params)}` : requestRootURL

    try {
      if (this.interceptors.request.length !== 0) {
        this.config = this.handleSuccessRequestInterceptors()
      }
    } catch (error) {
      await this.handleRequestErrorInterceptors(error)
    }

    let responseResult: Response | null = null
    try {
      const response = await fetch(endURL, {
        ...requestConfig,
        headers: {
          ...requestConfig.headers,
          ...(authorizeToken && { Authorization: `Bearer ${authorizeToken}` }),
          ...(visitorToken && { Authorization: `Bearer ${visitorToken}` }),
        },
        ...requestOptions,
        method,
        ...(requestData && { body: JSON.stringify(requestData) }),
      })
      responseResult = response

      if (!response.ok) {
        const responseError = (await response.json()) as unknown

        if (handleError) {
          throw handleError(responseError)
        }
      }

      await this.handleSuccessResponseInterceptors(response)

      const data = await getResponseData<ResponseData>(response)

      if (isFullResponse) {
        const fullResponse = { ...response, data }
        return fullResponse
      }

      return data
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      await this.handleResponseErrorInterceptors({ error, response: responseResult! })

      throw error
    }
  }

  getInterceptors = () => this.interceptors

  addRequestInterceptor = (interceptor: RequestInterceptor) => {
    this.interceptors.request.push(interceptor)
  }
  addResponseInterceptor = (interceptor: ResponseInterceptor) => {
    this.interceptors.response.push(interceptor)
  }
  removeRequestInterceptor = (toRemoveInterceptor: RequestInterceptor) => {
    this.interceptors.request = this.interceptors.request.filter(
      (interceptor) => interceptor !== toRemoveInterceptor,
    )
  }
  removeResponseInterceptor = (toRemoveInterceptor: ResponseInterceptor) => {
    this.interceptors.response = this.interceptors.response.filter(
      (interceptor) => interceptor !== toRemoveInterceptor,
    )
  }

  get<ResponseData = unknown>(url: FetchUrl, config?: FlatRequestOptions): Promise<ResponseData>
  get<ResponseData = unknown>(
    url: FetchUrl,
    config?: FullRequestOptions,
  ): FullResponse<ResponseData>
  get<ResponseData = unknown>(url: FetchUrl, config?: FlatRequestOptions | FullRequestOptions) {
    return this.makeRequest<ResponseData>('GET', url, config)
  }

  post<ResponseData = unknown>(url: FetchUrl, config?: FlatRequestOptions): Promise<ResponseData>
  post<ResponseData = unknown>(
    url: FetchUrl,
    config?: FullRequestOptions,
  ): FullResponse<ResponseData>
  post<ResponseData = unknown>(url: FetchUrl, config?: FlatRequestOptions | FullRequestOptions) {
    return this.makeRequest<ResponseData>('POST', url, config)
  }

  put<ResponseData = unknown>(url: FetchUrl, config?: FlatRequestOptions): Promise<ResponseData>
  put<ResponseData = unknown>(
    url: FetchUrl,
    config?: FullRequestOptions,
  ): FullResponse<ResponseData>
  put<ResponseData = unknown>(url: FetchUrl, config?: FlatRequestOptions | FullRequestOptions) {
    return this.makeRequest<ResponseData>('PUT', url, config)
  }

  patch<ResponseData = unknown>(url: FetchUrl, config?: FlatRequestOptions): Promise<ResponseData>
  patch<ResponseData = unknown>(
    url: FetchUrl,
    config?: FullRequestOptions,
  ): FullResponse<ResponseData>
  patch<ResponseData = unknown>(url: FetchUrl, config?: FlatRequestOptions | FullRequestOptions) {
    return this.makeRequest<ResponseData>('PATCH', url, config)
  }

  del<ResponseData = unknown>(url: FetchUrl, config?: FlatRequestOptions): Promise<ResponseData>
  del<ResponseData = unknown>(
    url: FetchUrl,
    config?: FullRequestOptions,
  ): FullResponse<ResponseData>
  del<ResponseData = unknown>(url: FetchUrl, config?: FlatRequestOptions | FullRequestOptions) {
    return this.makeRequest<ResponseData>('DELETE', url, config)
  }
}

export { FetchApi as Fetch }
