import { QueryOptions, useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'

import { RawSelectOption } from '../selectOptions.types'
import { formatOption, getOptionLabel, getOptionValue } from '../selectOptions.utils'

export interface UseLoadSelectOptionsProps<TOption extends RawSelectOption = RawSelectOption> {
  key: unknown
  options?: TOption[]
  enabled?: boolean
  queryOptions?: QueryOptions<TOption[], unknown, TOption[]>
  getValue?: (option: TOption) => unknown
  getLabel?: (option: TOption) => string
  loadOptions?: () => Promise<TOption[]>
}

export interface LoadSelectOptionsProps<TOption extends RawSelectOption = RawSelectOption> {
  options?: TOption[]
  selectOptions?: UseLoadSelectOptionsProps<TOption>
}

export const useLoadSelectOptions = <
  TOption extends RawSelectOption = RawSelectOption,
  TValue = unknown,
>({
  options: customOptions,
  key = '',
  enabled,
  queryOptions,
  getLabel = getOptionLabel,
  getValue = getOptionValue,
  loadOptions,
}: UseLoadSelectOptionsProps<TOption>) => {
  const isEnabled = !!loadOptions && !!enabled
  const queryClient = useQueryClient()
  const queryKey = useMemo(() => ['options', key], [key])

  const {
    data: newOptions = [],
    isInitialLoading,
    refetch,
  } = useQuery({
    enabled: isEnabled,
    queryKey,
    queryFn: loadOptions,
    select: (data: TOption[]) => {
      if (!data || !Array.isArray(data)) return []

      return data.map((option) => formatOption<TOption, TValue>({ option, getLabel, getValue }))
    },
    initialData: customOptions,
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    ...queryOptions,
  })

  const isNewOptions = newOptions?.length > 0

  useEffect(() => {
    if (!isNewOptions && customOptions?.length) {
      queryClient.setQueryData(queryKey, customOptions)
    }
  }, [customOptions, isNewOptions, queryClient, queryKey])

  return {
    isLoading: isInitialLoading,
    options: newOptions,
    refetch,
  }
}
