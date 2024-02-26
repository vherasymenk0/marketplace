import { TableCell } from '@mui/material'

import { CURRENCY_FORMAT_OPTIONS } from '~/features/currency'

import { ImportedDetailsModel } from '~/entities/import'

import { ImportsLabel } from '~/shared/components/common/importsLabel'
import { TableLinkRow, TableNumberCell, TableTextCell } from '~/shared/components/common/Table'

export const DesktopImportedTableRow = ({
  partNumber,
  partType,
  brand,
  description,
  price,
  shippingCost,
  id,
  title,
  originCountry,
}: ImportedDetailsModel) => {
  return (
    <TableLinkRow href={`/vendor/edit-listing/${id}`} key={partNumber}>
      <TableTextCell value={title} />
      <TableTextCell value={partNumber} />
      <TableTextCell value={originCountry} />
      <TableTextCell value={brand} />
      <TableCell>
        <ImportsLabel value={partType} />
      </TableCell>
      <TableNumberCell value={price} {...CURRENCY_FORMAT_OPTIONS} />
      <TableNumberCell value={shippingCost} {...CURRENCY_FORMAT_OPTIONS} />
      <TableTextCell value={description} />
    </TableLinkRow>
  )
}
