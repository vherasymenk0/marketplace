import { TableBody, TableHead, TableRow } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import { IMPORTED_DETAILS_COLUMNS, ImportedDetailsModel } from '~/entities/import'

import { Table, TableHeadCell } from '~/shared/components/common/Table'

import { useStyles } from '../ImportedDetails.styles'

import { DesktopImportedTableRow } from './DesktopImportedTableRow'

interface Props {
  data: ImportedDetailsModel[]
}

export const DesktopImportedTable = ({ data }: Props) => {
  const styles = useStyles()

  return (
    <Table>
      <TableHead>
        <TableRow>
          {IMPORTED_DETAILS_COLUMNS.map((label) => (
            <TableHeadCell key={label.id}>
              <FormattedMessage {...label} />
            </TableHeadCell>
          ))}
        </TableRow>
      </TableHead>

      <TableBody sx={styles.root}>
        {data.map((row) => (
          <DesktopImportedTableRow key={row.id} {...row} />
        ))}
      </TableBody>
    </Table>
  )
}
