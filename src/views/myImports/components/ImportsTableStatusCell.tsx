import { TableCell } from '@mui/material'
import { TableCellProps } from '@mui/material/TableCell/TableCell'

import { ListingImportModel } from '~/entities/import'

import { ImportsLabel } from '~/shared/components/common/importsLabel'

interface Props extends TableCellProps {
  value: ListingImportModel['status']
}

const STATUS_LABEL_VARIANTS = {
  imported: 'success',
  failed: 'error',
  in_progress: 'info',
} as const

export const ImportsTableStatusCell = ({ value, ...rest }: Props) => {
  const variant = STATUS_LABEL_VARIANTS[value]

  return (
    <TableCell {...rest}>
      <ImportsLabel variant={variant} value={value} />
    </TableCell>
  )
}
