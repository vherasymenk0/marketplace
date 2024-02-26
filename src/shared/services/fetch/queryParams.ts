import qs from 'qs'

export type QueryParams = Record<string, any>

export const parseQueryParams = (search = '', options: qs.IStringifyOptions = {}) => {
  if (!search?.slice(1)) return {}

  return qs.parse(search, {
    ignoreQueryPrefix: true,
    depth: 5,
    ...options,
  })
}

export const stringifyQueryParams = (data: QueryParams, options: qs.IStringifyOptions = {}) =>
  qs.stringify(data, {
    skipNulls: true,
    addQueryPrefix: true,
    arrayFormat: 'brackets',
    ...options,
  })
