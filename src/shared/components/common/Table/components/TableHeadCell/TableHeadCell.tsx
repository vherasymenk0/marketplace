'use client'

import { Stack, TableCell } from '@mui/material'
import { TableCellProps } from '@mui/material/TableCell/TableCell'
import clsx from 'clsx'
import { MouseEventHandler } from 'react'

import ArrowIcon from '~/shared/assets/icons/triangle.svg'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'

import { useStyles } from './TableHeadCell.styles'

type Props = Omit<TableCellProps, 'sortDirection'> & {
  onChangeSort?: () => void
  sortDirection?: string
}

export const TableHeadCell = ({
  children,
  onChangeSort,
  sortDirection,
  onClick,
  ...rest
}: Props) => {
  const styles = useStyles({ sortDirection })

  const handleClick: MouseEventHandler<HTMLTableCellElement> = (e) => {
    if (onChangeSort) {
      onChangeSort()
    }

    onClick?.(e)
  }

  return (
    <TableCell
      className={clsx({
        '--sortable': !!onChangeSort,
      })}
      onClick={handleClick}
      {...rest}
    >
      <Text color="primary.dark" variant="subtitle4">
        {children}
        {onChangeSort ? (
          <>
            <Stack sx={styles.wrapper}>
              <SvgIcon icon={ArrowIcon} size={12} sx={styles.arrowUp} />
              <SvgIcon icon={ArrowIcon} size={12} sx={styles.arrowDown} />
            </Stack>
          </>
        ) : null}
      </Text>
    </TableCell>
  )
}
