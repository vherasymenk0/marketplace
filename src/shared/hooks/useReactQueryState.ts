import { QueryKey, QueryOptions, useQuery, useQueryClient } from '@tanstack/react-query'
import type { UseQueryResult } from '@tanstack/react-query/src/types'
import { useCallback, useEffect } from 'react'

export const useReactQueryState = <TData = any>(key: QueryKey, options?: QueryOptions<TData>) => {
  const queryClient = useQueryClient()

  const { data: stateData, ...state } = useQuery<TData>(key, options)

  const setData = useCallback(
    (data: TData) => {
      queryClient.setQueryData<TData>(key, data)
    },
    [key],
  )

  useEffect(() => {
    if (options?.initialData && !stateData) {
      setData(options.initialData as TData)
    }
  }, [])

  return [stateData, setData, state] as [TData, typeof setData, UseQueryResult<TData>]
}
