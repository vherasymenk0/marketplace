import { FormatNumberOptions, useIntl } from 'react-intl'

import { TableTextCell } from './TableTextCell'

interface Props extends FormatNumberOptions {
  value: number
}

export const TableNumberCell = ({ value, useGrouping = false, ...options }: Props) => {
  const intl = useIntl()
  const formattedValue = intl.formatNumber(value, { useGrouping, ...options })

  return <TableTextCell variant="subtitle4" value={formattedValue} />
}
