import { TableBody, TableHead, TableRow } from '@mui/material'
import { FormattedMessage, useIntl } from 'react-intl'

import { FAILED_DETAILS_COLUMNS, FailedDetailsModel } from '~/entities/import'

import ErrorIcon from '~/shared/assets/icons/triangle-warning.svg'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Table, TableHeadCell, TableTextCell } from '~/shared/components/common/Table'

import { useStyles } from '../FailedDetails.styles'

interface Props {
  data: FailedDetailsModel[]
}

export const DesktopFailedTableContent = ({ data }: Props) => {
  const styles = useStyles()
  const intl = useIntl()

  return (
    <Table>
      <TableHead>
        <TableRow>
          {FAILED_DETAILS_COLUMNS.map((label) => (
            <TableHeadCell key={label.id}>
              <FormattedMessage {...label} />
            </TableHeadCell>
          ))}
        </TableRow>
      </TableHead>

      <TableBody sx={styles.root}>
        {data.map(({ rowNumber, partNumber, errorMessage }) => {
          const row = intl.formatMessage(
            { id: 'failedDetails.tableRow.row', defaultMessage: 'Row {number}' },
            { number: rowNumber },
          )

          return (
            <TableRow key={rowNumber}>
              <TableTextCell value={row} color="grey.700" />
              <TableTextCell value={partNumber} color="grey.700" />
              <TableTextCell
                value={errorMessage}
                color="error.main"
                icon={<SvgIcon icon={ErrorIcon} stroke="error.main" />}
                containerSx={{ alignItems: 'flex-start' }}
              />
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
