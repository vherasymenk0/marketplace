'use client'

import { MY_IMPORTS_SEARCH_PARAMS, MyImportsSearchParams } from '~/entities/import'

import { useQueryParams } from '~/shared/hooks/useQueryParams'

export const useSortImports = () => {
  const { parsedQueryParams, setQueryParams } = useQueryParams<MyImportsSearchParams>()
  const sortByStatus = parsedQueryParams?.sort_by_status

  const defaultSortByDateValue = sortByStatus ? undefined : 'desc'
  const sortByDate = parsedQueryParams?.sort_by_created_at ?? defaultSortByDateValue

  const handleSortByStatus = () => {
    const newSort = sortByStatus === 'asc' ? 'desc' : 'asc'

    setQueryParams(
      {
        [MY_IMPORTS_SEARCH_PARAMS.sortByStatus]: newSort,
      },
      true,
    )
  }

  const handleSortByDate = () => {
    const newSort = sortByDate === 'asc' ? 'desc' : 'asc'

    setQueryParams({
      [MY_IMPORTS_SEARCH_PARAMS.sortByCreatedAt]: newSort,
      [MY_IMPORTS_SEARCH_PARAMS.sortByStatus]: '',
    })
  }

  return { handleSortByDate, handleSortByStatus, sortByStatus, sortByDate }
}
