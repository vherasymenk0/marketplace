'use client'

import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from 'next/navigation'

import { queryStringToObject } from '~/shared/helpers/queryStringToObject'

import { QueryParams } from '../types/search'

interface ReturnType<TQueries> {
  queryParams: ReadonlyURLSearchParams
  setQueryParams: (params: QueryParams, clearOther?: boolean) => void
  parsedQueryParams: TQueries
}

export const useQueryParams = <TQueries extends QueryParams>(): ReturnType<TQueries> => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const urlSearchParams = new URLSearchParams(searchParams)
  const parsedQueryParams = queryStringToObject<TQueries>(urlSearchParams.toString())

  const setQueryParams = (params: QueryParams, clearOther = false) => {
    if (clearOther) {
      const keys = [...urlSearchParams.keys()]
      keys.forEach((key) => urlSearchParams.delete(key))
    }

    Object.entries(params).forEach(([key, value]) => {
      if (value === undefined || value === '') {
        urlSearchParams.delete(key)
      } else {
        urlSearchParams.set(key, String(value))
      }
    })

    const search = urlSearchParams.toString()
    const queryParams = search ? `?${search}` : ''

    router.replace(`${pathname}${queryParams}`)
  }

  return { queryParams: searchParams, setQueryParams, parsedQueryParams }
}
