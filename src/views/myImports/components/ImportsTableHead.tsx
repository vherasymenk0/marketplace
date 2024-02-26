'use client'

import { TableHead, TableRow, Theme, useMediaQuery } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import { TableHeadCell } from '~/shared/components/common/Table'

import { useSortImports } from '../hooks/useSortImports'

export const ImportsTableHead = () => {
  const { handleSortByDate, handleSortByStatus, sortByStatus, sortByDate } = useSortImports()
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <TableHead>
      <TableRow>
        <TableHeadCell>
          <FormattedMessage id="myImports.tableCell.file" defaultMessage="File Name" />
        </TableHeadCell>
        <TableHeadCell onChangeSort={handleSortByStatus} sortDirection={sortByStatus}>
          <FormattedMessage id="myImports.tableCell.status" defaultMessage="Status" />
        </TableHeadCell>

        {!isMobile && (
          <>
            <TableHeadCell>
              <FormattedMessage id="myImports.tableCell.imported" defaultMessage="Imported" />
            </TableHeadCell>
            <TableHeadCell>
              <FormattedMessage id="myImports.tableCell.failed" defaultMessage="Failed" />
            </TableHeadCell>
            <TableHeadCell onChangeSort={handleSortByDate} sortDirection={sortByDate}>
              <FormattedMessage id="myImports.tableCell.date" defaultMessage="Date" />
            </TableHeadCell>
          </>
        )}
      </TableRow>
    </TableHead>
  )
}
