'use client'

import { TableBody, Theme, useMediaQuery } from '@mui/material'

import { ListingImportModel } from '~/entities/import'

import {
  Table,
  TableDateCell,
  TableLinkRow,
  TableNumberCell,
} from '~/shared/components/common/Table'

import { ImportsTableFileCell } from './ImportsTableFileCell'
import { ImportsTableHead } from './ImportsTableHead'
import { ImportsTableStatusCell } from './ImportsTableStatusCell'

export const ImportsTable = ({ tableData }: { tableData: ListingImportModel[] }) => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Table containerSx={{ mt: { xs: 2, md: 4 } }}>
      <ImportsTableHead />

      <TableBody>
        {tableData.map(({ id, slug, importedCount, failedCount, status, filename, createdAt }) => (
          <TableLinkRow href={`/vendor/my-imports/${slug}/imported-listings`} key={id + slug}>
            <ImportsTableFileCell value={filename} />
            <ImportsTableStatusCell value={status} />

            {!isMobile && (
              <>
                <TableNumberCell value={importedCount} />
                <TableNumberCell value={failedCount} />
                <TableDateCell value={createdAt} />
              </>
            )}
          </TableLinkRow>
        ))}
      </TableBody>
    </Table>
  )
}
