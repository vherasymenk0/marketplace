import { Stack, SxProps } from '@mui/material'
import { ReactNode } from 'react'

import { useStyles } from './Banner.styles'

interface Props {
  children: ReactNode
  sx?: SxProps
}

export const Banner = ({ children, sx }: Props) => {
  const styles = useStyles()

  return <Stack sx={{ ...styles.root, ...sx }}>{children}</Stack>
}
