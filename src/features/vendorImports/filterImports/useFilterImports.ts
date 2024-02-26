'use client'

import { ChangeEvent, useState } from 'react'

import {
  ImportListingStatus,
  MY_IMPORTS_SEARCH_PARAMS,
  MyImportsSearchParams,
} from '~/entities/import'

import { useQueryParams } from '~/shared/hooks/useQueryParams'

type FilterType = ImportListingStatus & 'all'

export const useFilterImports = () => {
  const [popperAnchorEl, setPopperAnchorEl] = useState<HTMLButtonElement | null>(null)
  const isShowFilter = Boolean(popperAnchorEl)

  const { parsedQueryParams, setQueryParams } = useQueryParams<MyImportsSearchParams>()
  const filterBy = parsedQueryParams?.filter_by_status ?? 'all'

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPopperAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setPopperAnchorEl(null)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value as FilterType

    if (value === 'all') {
      setQueryParams({}, true)
    } else {
      setQueryParams({ [MY_IMPORTS_SEARCH_PARAMS.filterByStatus]: value }, true)
    }

    setPopperAnchorEl(null)
  }

  return {
    isShowFilter,
    popperAnchorEl,
    filterBy,
    handleOpen,
    handleClose,
    handleChange,
  }
}
