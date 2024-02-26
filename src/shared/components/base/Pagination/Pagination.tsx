'use client'

import { Pagination as MuiPagination, PaginationItem, PaginationProps } from '@mui/material'

import ArrowLeft from '~/shared/assets/icons/arrow-left.svg'
import ArrowRight from '~/shared/assets/icons/arrow-right.svg'

export const Pagination = ({ count, ...rest }: PaginationProps) => (
  <MuiPagination
    color="primary"
    shape="rounded"
    variant="text"
    boundaryCount={2}
    siblingCount={1}
    count={count}
    renderItem={(item) => (
      <PaginationItem slots={{ previous: ArrowLeft, next: ArrowRight }} {...item} />
    )}
    {...rest}
  />
)
