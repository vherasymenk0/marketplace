'use client'

import { Stack } from '@mui/material'

import { FailedDetailsModel } from '~/entities/import'

import { CSSHide } from '~/shared/components/base/CSSHide'
import { QueryPagination } from '~/shared/components/base/QueryPagination'

import { DesktopFailedTableContent } from './components/DesktopFailedTableContent'
import { FailedListingsEmptyState } from './components/FailedListingsEmptyState'
import { MobileFailedTableContent } from './components/MobileFailedTableContent'

interface Props {
  failedListings: FailedDetailsModel[]
  pagesCount: number
  itemsCount: number
}

export const FailedDetails = ({ failedListings, pagesCount, itemsCount }: Props) => {
  const isEmpty = itemsCount === 0

  return (
    <Stack sx={{ mt: { xs: 2, md: 4 } }}>
      {isEmpty ? (
        <FailedListingsEmptyState />
      ) : (
        <>
          <CSSHide screen="desktop">
            <MobileFailedTableContent data={failedListings} />
          </CSSHide>
          <CSSHide screen="mobile">
            <DesktopFailedTableContent data={failedListings} />
          </CSSHide>

          <QueryPagination sx={{ mt: 6 }} count={pagesCount} />
        </>
      )}
    </Stack>
  )
}
