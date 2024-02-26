'use client'

import { Box, BoxProps } from '@mui/material'
import { ReactNode } from 'react'

import { useStyles } from './AspectRatio.styles'

export interface AspectRatioProps extends BoxProps {
  ratio?: number
  children: ReactNode
}

export const AspectRatio = ({ ratio = 1 / 1, children, sx, ...rest }: AspectRatioProps) => {
  const styles = useStyles({ sx, ratio })

  return (
    <Box width="100%" sx={styles.root} {...rest}>
      {children}
    </Box>
  )
}
