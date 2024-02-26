'use client'

import { Typography, TypographyProps, useTheme } from '@mui/material'
import { Breakpoint } from '@mui/material/styles'
import { ElementType, ReactNode } from 'react'

interface TextProps {
  component?: ElementType
  size?: Partial<Record<Breakpoint, TypographyProps['variant']>>
  children?: ReactNode
  lineClamp?: number
}

interface UseStylesProps {
  size?: TextProps['size']
}

const useStyles = ({ size }: UseStylesProps) => {
  const { typography } = useTheme()

  const { fontSize, lineHeight } = Object.entries(size ?? {}).reduce(
    (acc, [key, value]) => {
      let newAcc = { ...acc }

      const typographyValue = typography[value as keyof typeof typography] as Omit<
        TypographyProps,
        'inherit'
      >

      newAcc = {
        fontSize: {
          ...newAcc.fontSize,
          [key]: typographyValue.fontSize,
        },
        lineHeight: {
          ...newAcc.lineHeight,
          [key]: typographyValue.lineHeight,
        },
      }

      return newAcc
    },
    { fontSize: {}, lineHeight: {} },
  )

  return {
    root: {
      fontSize,
      lineHeight,
    },
  }
}

export const Text = ({ size, sx, children, lineClamp, ...rest }: TextProps & TypographyProps) => {
  const styles = useStyles({ size })

  const defaultVariant = size?.md ?? 'body1'

  return (
    <Typography
      sx={{
        ...styles.root,
        ...(lineClamp && {
          display: '-webkit-box',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          WebkitLineClamp: lineClamp,
          WebkitBoxOrient: 'vertical',
          wordBreak: 'break-all',
        }),
        ...sx,
      }}
      variant={defaultVariant}
      {...rest}
    >
      {children}
    </Typography>
  )
}
