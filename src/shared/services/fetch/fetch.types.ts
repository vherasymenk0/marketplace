import { QueryParams } from '~/shared/types/search'

export type FetchType = Parameters<typeof fetch>
export type FetchUrl = string
export type FetchOptions = NonNullable<FetchType[1]>

export interface Config extends Pick<FetchOptions, 'headers' | 'credentials'> {
  baseURL?: string
  shouldDeserialize?: boolean
  shouldSendCredentials?: boolean
  apiToken?: string
  handleError?: (error: unknown) => unknown
}

export interface RequestInterceptor {
  onSuccess?: (response: Config) => Config
  onError?: (error: unknown) => any
}

export interface InterceptorError {
  error: unknown
  response: Response
}
export interface ResponseInterceptor {
  onSuccess?: <Resp extends Response>(response: Resp) => Resp | Promise<Resp>
  onError?: (error: InterceptorError) => InterceptorError | Promise<InterceptorError>
}
export interface Interceptors {
  request: RequestInterceptor[]
  response: ResponseInterceptor[]
}

export interface RequestOptions extends FetchOptions, Pick<Config, 'shouldDeserialize'> {
  data?: Record<string, unknown> | Record<string, unknown>[] | FormData | File
  isFullResponse?: boolean
  authorizeToken?: string
  visitorToken?: string
  params?: QueryParams
}

export interface FlatRequestOptions extends RequestOptions {
  isFullResponse?: false
}
export interface FullRequestOptions extends RequestOptions {
  isFullResponse?: true
}

export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
export type FullResponse<ResponseData> = Promise<
  {
    data: ResponseData
  } & Response
>

export type ApiMethod<
  ResponseData = void,
  Data = undefined,
  Options extends Pick<RequestOptions, 'authorizeToken'> = Pick<RequestOptions, 'authorizeToken'>,
> = Data extends undefined
  ? (options?: Options) => Promise<ResponseData>
  : (data: Data, options?: Options) => Promise<ResponseData>
