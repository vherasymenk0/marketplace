import { Box, Stack, SxProps, TableCell, TypographyProps } from '@mui/material'
import { TableCellProps } from '@mui/material/TableCell/TableCell'
import { ReactNode } from 'react'

import { Text } from '~/shared/components/base/Text'

export interface TableTextCellProps extends TypographyProps {
  icon?: ReactNode
  cellProps?: TableCellProps
}

interface Props extends TableTextCellProps {
  value: string | null
  containerSx?: SxProps
}

export const TableTextCell = ({
  color = 'grey.900',
  variant = 'body4',
  icon,
  value,
  cellProps,
  containerSx,
  ...rest
}: Props) => {
  return (
    <TableCell {...cellProps}>
      <Stack flexDirection="row" alignItems="center" sx={{ ...containerSx }}>
        {icon ? (
          <Box mr={1} ml={-0.5}>
            {icon}
          </Box>
        ) : null}
        <Text color={color} variant={variant} lineClamp={2} {...rest}>
          {value ?? ''}
        </Text>
      </Stack>
    </TableCell>
  )
}
