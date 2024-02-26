import { FormatDateOptions } from 'react-intl'

import CalendarIcon from '~/shared/assets/icons/calendar.svg'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { getFormattedDate } from '~/shared/helpers/getFormattedDate'

import { TableTextCell } from './TableTextCell'

interface Props extends FormatDateOptions {
  value: Date | number | string
}

export const TableDateCell = ({ value, ...options }: Props) => {
  const formattedDate = getFormattedDate(value, { ...options })

  return (
    <TableTextCell
      icon={<SvgIcon icon={CalendarIcon} color="primary.main" />}
      value={formattedDate}
    />
  )
}
