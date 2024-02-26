'use client'

import clsx from 'clsx'
import { forwardRef } from 'react'

import { FormControl, FormControlProps } from '~/shared/components/base/FormControl'
import {
  TextInputBase,
  TextInputBaseProps,
  TextInputBaseRef,
} from '~/shared/components/base/TextInputBase'
import { isEmptyValue } from '~/shared/helpers/isEmptyValue'

type TextInputRef = TextInputBaseRef
type TextInputFormControlProps = Pick<
  FormControlProps,
  'errorMessage' | 'fullWidth' | 'label' | 'helperText'
>

export interface TextInputProps extends TextInputBaseProps, TextInputFormControlProps {
  id?: string
  isSuccess?: boolean
  isFilled?: boolean
  FormControlProps?: FormControlProps
}

export const TextInput = forwardRef(
  (
    {
      id = '',
      label,
      value,
      size = 'medium',
      error,
      errorMessage,
      helperText,
      required,
      fullWidth = false,
      disabled,
      isSuccess,
      isFilled: controlledIsFilled,
      FormControlProps: formControlProps,
      className,
      ...props
    }: TextInputProps,
    ref: TextInputRef,
  ) => {
    const isFilled = controlledIsFilled ?? !isEmptyValue(value)

    return (
      <FormControl
        htmlFor={id}
        label={label}
        size={size}
        error={error}
        errorMessage={errorMessage}
        required={required}
        fullWidth={fullWidth}
        helperText={helperText}
        {...formControlProps}
      >
        <TextInputBase
          id={id}
          ref={ref}
          value={value}
          size={size}
          error={error}
          fullWidth={fullWidth}
          disabled={disabled}
          className={clsx(className, { filled: isFilled, success: isSuccess })}
          {...props}
        />
      </FormControl>
    )
  },
)
