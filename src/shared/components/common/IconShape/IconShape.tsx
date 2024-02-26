'use client'

import { Box } from '@mui/material'

import { useStyles } from './IconShape.styles'

interface Props {
  children: React.ReactNode
  variant?: 'primary' | 'error' | 'warning'
}

export const IconShape = ({ children, variant = 'primary' }: Props) => {
  const styles = useStyles({ variant })

  return <Box sx={styles.shape}>{children}</Box>
}
