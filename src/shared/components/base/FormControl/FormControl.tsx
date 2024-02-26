'use client'

import {
  FormHelperText,
  FormHelperTextProps,
  FormLabel,
  FormLabelProps,
  FormControl as MuiFormControl,
  FormControlProps as MuiFormControlProps,
} from '@mui/material'
import { ReactNode } from 'react'

interface BaseProps {
  required?: boolean
  helperText?: FormHelperTextProps['children']
  helperProps?: FormHelperTextProps
  label?: FormLabelProps['children']
  labelProps?: FormLabelProps
  htmlFor?: FormLabelProps['htmlFor']
  error?: boolean
  errorMessage?: FormHelperTextProps['children']
  errorProps?: FormHelperTextProps
  children?: ReactNode
}

export type FormControlProps = BaseProps & MuiFormControlProps

export const FormControl: React.FC<FormControlProps> = ({
  required,
  label,
  labelProps,
  errorMessage,
  error,
  errorProps,
  helperText,
  helperProps,
  children,
  htmlFor,
  disabled,
  ...rest
}) => {
  const isError = !!errorMessage || error

  return (
    <MuiFormControl {...rest}>
      {!!label && (
        <FormLabel
          focused={false}
          htmlFor={htmlFor}
          required={required}
          error={isError}
          disabled={disabled}
          {...labelProps}
        >
          {label}
        </FormLabel>
      )}

      {children}

      {!!errorMessage && (
        <FormHelperText error={isError} {...errorProps} sx={{ m: 0, ...errorProps?.sx }}>
          {errorMessage}
        </FormHelperText>
      )}

      {helperText ? (
        <FormHelperText variant="filled" {...helperProps} sx={{ m: 0, ...helperProps?.sx }}>
          {helperText}
        </FormHelperText>
      ) : null}
    </MuiFormControl>
  )
}
