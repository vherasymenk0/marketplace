'use client'

import { Box, SxProps, Theme } from '@mui/material'
import { ComponentType, FunctionComponent, SVGProps } from 'react'

import { getPaletteColor } from '~/shared/helpers/getPaletteColor'
import { breakpoints } from '~/shared/theme/breakpoints'

type BreakpointsType = typeof breakpoints.values
type ResponseValues = Partial<Record<keyof BreakpointsType, string | number>>

export interface SvgIconProps {
  className?: string
  icon: FunctionComponent<SVGProps<HTMLOrSVGElement>> | ComponentType<SVGProps<HTMLOrSVGElement>>
  color?: ResponseValues | string
  stroke?: ResponseValues | string
  size?: Size
  sx?: SxProps<Theme>
}

type SizeUnit = ResponseValues | number
type Size =
  | ResponseValues
  | number
  | {
      height: SizeUnit
      width: SizeUnit
    }

const getSizeUnits = (size: Size): [SizeUnit, SizeUnit] => {
  const isNotSame = typeof size === 'object' && 'height' in size

  if (isNotSame) return [size.width, size.height]

  return [size, size]
}

export const SvgIcon = ({
  icon: Icon,
  color,
  stroke,
  size = 24,
  className,
  sx,
  ...rest
}: SvgIconProps) => {
  const [width, height] = getSizeUnits(size)
  const fillColor = typeof color === 'string' ? getPaletteColor(color) : color
  const strokeColor = typeof stroke === 'string' ? getPaletteColor(stroke) : stroke

  return (
    <Box
      className={className}
      sx={{
        display: 'flex',
        alignItems: 'center',
        width,
        height,
        backgroundColor: 'transparent',
        '> svg': {
          width,
          height,
          path: {
            ...(color && { fill: fillColor }),
            ...(stroke && { stroke: strokeColor }),
          },
        },
        ...sx,
      }}
      {...rest}
    >
      <Icon />
    </Box>
  )
}
