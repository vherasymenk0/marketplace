import { Box, useTheme } from '@mui/material'

import { OrderModel } from '../../model/order'

interface Props {
  status: OrderModel['status']
}

export const StatusIndicator = ({ status }: Props) => {
  const { palette } = useTheme()

  const STATUS_COLORS = {
    draft: palette.warning.main,
    processing: palette.warning.main,
    sent_to_buyer: palette.success.main,
  }

  return (
    <Box
      sx={{
        height: { xs: 176, md: 48 },
        width: 4,
        minWidth: 4,
        borderRadius: 1,
        backgroundColor: STATUS_COLORS[status],
      }}
    />
  )
}
