'use client'

import { Table as MuiTable, SxProps, TableContainer } from '@mui/material'
import { TableProps } from '@mui/material/Table/Table'
import { PropsWithChildren, forwardRef } from 'react'

import { useStyles } from './Table.styles'

interface Props extends PropsWithChildren, Omit<TableProps, 'ref'> {
  containerSx?: SxProps
}

export const Table = forwardRef(
  ({ size = 'medium', containerSx, children, ...props }: Props, ref: TableProps['ref']) => {
    const styles = useStyles()

    return (
      <TableContainer sx={{ ...styles.container, ...containerSx }}>
        <MuiTable ref={ref} size={size} {...props}>
          {children}
        </MuiTable>
      </TableContainer>
    )
  },
)
