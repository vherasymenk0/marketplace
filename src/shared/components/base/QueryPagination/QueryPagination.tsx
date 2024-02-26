import { PaginationProps } from '@mui/material'

import { Pagination } from '~/shared/components/base/Pagination'
import { useQueryParams } from '~/shared/hooks/useQueryParams'

interface Props {
  count: number
  sx?: PaginationProps['sx']
}

export const QueryPagination = ({ count, sx }: Props) => {
  const { setQueryParams, parsedQueryParams } = useQueryParams()

  const currentPage = parsedQueryParams?.page ?? 1

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    if (value === 1) {
      setQueryParams({ page: '' })
    } else {
      setQueryParams({ page: String(value) })
    }
  }

  return (
    <Pagination
      count={count}
      size="large"
      sx={sx}
      page={Number(currentPage)}
      onChange={handleChange}
    />
  )
}
