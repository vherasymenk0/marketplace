import { Box, SxProps } from '@mui/material'

import { useStyles } from './BasicCard.styles'

interface Props {
  children: React.ReactNode
  sx?: SxProps
}

export const BasicCard = ({ sx, children }: Props) => {
  const styles = useStyles()

  return <Box sx={{ ...styles.container, ...sx }}>{children}</Box>
}
