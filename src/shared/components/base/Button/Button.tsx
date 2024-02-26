'use client'

import { LoadingButton, LoadingButtonProps } from '@mui/lab'
import { CircularProgress } from '@mui/material'
import { Ref, forwardRef } from 'react'

import { LinkComponent } from '../LinkComponent'

export type ButtonProps = LoadingButtonProps & {
  loadingIndicatorSize?: number
}

export const Button = forwardRef(
  (
    {
      children,
      size = 'large',
      variant = 'contained',
      loadingPosition = 'center',
      fullWidth = false,
      sx,
      disabled,
      loadingIndicatorSize = 20,
      ...props
    }: ButtonProps,
    ref?: Ref<HTMLButtonElement>,
  ) => (
    <LoadingButton
      ref={ref}
      size={size}
      LinkComponent={LinkComponent}
      fullWidth={fullWidth}
      variant={variant}
      disabled={disabled}
      loadingPosition={loadingPosition}
      loadingIndicator={<CircularProgress color="inherit" size={loadingIndicatorSize} />}
      disableRipple
      disableElevation
      sx={{
        ...sx,
      }}
      {...props}
    >
      {children}
    </LoadingButton>
  ),
)
