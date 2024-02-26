'use client'

import { Stack } from '@mui/material'

import { ImportedDetailsModel } from '~/entities/import'

import { CSSHide } from '~/shared/components/base/CSSHide'
import { QueryPagination } from '~/shared/components/base/QueryPagination'

import { DesktopImportedTable } from './components/DesktopImportedTable'
import { ImportedListingsEmptyState } from './components/ImportedListingsEmptyState'
import { MobileImportedTable } from './components/MobileImportedTable'

interface Props {
  importedListings: ImportedDetailsModel[]
  pagesCount: number
  itemsCount: number
}

export const ImportedDetails = ({ importedListings, pagesCount, itemsCount }: Props) => {
  const isEmpty = itemsCount === 0

  return (
    <Stack sx={{ mt: { xs: 2, md: 4 } }}>
      {isEmpty ? (
        <ImportedListingsEmptyState />
      ) : (
        <>
          <CSSHide screen="desktop">
            <MobileImportedTable data={importedListings} />
          </CSSHide>
          <CSSHide screen="mobile">
            <DesktopImportedTable data={importedListings} />
          </CSSHide>

          <QueryPagination sx={{ mt: 6 }} count={pagesCount} />
        </>
      )}
    </Stack>
  )
}
