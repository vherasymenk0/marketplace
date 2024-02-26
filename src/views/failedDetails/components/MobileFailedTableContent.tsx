import { Stack, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import { FailedDetailsModel } from '~/entities/import'

import { Text } from '~/shared/components/base/Text'
import { Table, TableHeadCell } from '~/shared/components/common/Table'

import { useStyles } from '../FailedDetails.styles'

interface Props {
  data: FailedDetailsModel[]
}

export const MobileFailedTableContent = ({ data }: Props) => {
  const styles = useStyles()

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>
            <FormattedMessage id="failedDetails.tableCell.files" defaultMessage="Failed Files" />
          </TableHeadCell>
        </TableRow>
      </TableHead>

      <TableBody sx={styles.root}>
        {data.map(({ partNumber, errorMessage, rowNumber }) => (
          <TableRow key={rowNumber}>
            <TableCell>
              <Stack justifyContent="space-between" gap={1}>
                <Text lineClamp={2} className="importDetailsFileCell">
                  {partNumber}
                </Text>
                <Text lineClamp={2} className="importDetailsFileCell" color="error.main">
                  {errorMessage}
                </Text>
              </Stack>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
