import { TableBody, TableHead, TableRow } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import { ImportedDetailsModel } from '~/entities/import'

import { Table, TableHeadCell } from '~/shared/components/common/Table'

import { useStyles } from '../ImportedDetails.styles'

import { MobileImportedTableRow } from './MobileImportedTableRow'

interface Props {
  data: ImportedDetailsModel[]
}

export const MobileImportedTable = ({ data }: Props) => {
  const styles = useStyles()

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>
            <FormattedMessage
              id="importedDetails.tableCell.files"
              defaultMessage="Imported Files"
            />
          </TableHeadCell>
        </TableRow>
      </TableHead>

      <TableBody sx={styles.root}>
        {data.map((item) => (
          <MobileImportedTableRow key={item.id} data={item} />
        ))}
      </TableBody>
    </Table>
  )
}
