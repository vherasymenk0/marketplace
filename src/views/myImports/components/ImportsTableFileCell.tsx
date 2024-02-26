'use client'

import { ListingImportModel } from '~/entities/import'

import FileIcon from '~/shared/assets/icons/file.svg'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { TableTextCell, TableTextCellProps } from '~/shared/components/common/Table'

interface Props extends TableTextCellProps {
  value: ListingImportModel['filename']
}

export const ImportsTableFileCell = ({ value, ...rest }: Props) => (
  <TableTextCell
    icon={<SvgIcon icon={FileIcon} color="primary.main" />}
    value={value}
    cellProps={{ sx: { maxWidth: 370 } }}
    {...rest}
  />
)
