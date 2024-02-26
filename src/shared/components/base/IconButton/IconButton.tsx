'use client'

import { ReactNode, Ref, forwardRef } from 'react'

import { Button, type ButtonProps } from '../Button'

import { useStyles } from './IconButton.styles'

export type IconButtonProps = Omit<ButtonProps, 'startIcon' | 'endIcon' | 'loadingPosition'> & {
  Icon: ReactNode
}

const loadingIndicatorSizes = {
  small: 18,
  medium: 24,
  large: 24,
}

export const IconButton = forwardRef(
  ({ Icon, size = 'large', sx, ...restProps }: IconButtonProps, ref?: Ref<HTMLButtonElement>) => {
    const styles = useStyles()
    const loadingIndicatorSize = loadingIndicatorSizes[size]

    return (
      <Button
        ref={ref}
        size={size}
        loadingIndicatorSize={loadingIndicatorSize}
        sx={{ ...styles.root, ...sx }}
        startIcon={Icon}
        {...restProps}
      />
    )
  },
)
