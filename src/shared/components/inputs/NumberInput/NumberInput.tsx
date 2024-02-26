'use client'

import clsx from 'clsx'
import { forwardRef } from 'react'
import { NumericFormat, NumericFormatProps } from 'react-number-format'

import { FormControl, FormControlProps } from '~/shared/components/base/FormControl'
import {
  TextInputBase,
  TextInputBaseProps,
  TextInputBaseRef,
} from '~/shared/components/base/TextInputBase'
import { isEmptyValue } from '~/shared/helpers/isEmptyValue'

type NumberInputRef = TextInputBaseRef
type NumberInputFormControlProps = Pick<
  FormControlProps,
  'errorMessage' | 'fullWidth' | 'label' | 'helperText'
>

export interface NumberInputProps
  extends NumberInputFormControlProps,
    NumericFormatProps<TextInputBaseProps> {
  id?: string
  isSuccess?: boolean
  isFilled?: boolean
  FormControlProps?: FormControlProps
  value?: number | null
  defaultValue?: number | null
}

export const NumberInput = forwardRef(
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
      hidden = false,
      fullWidth = false,
      disabled,
      isSuccess,
      isFilled: controlledIsFilled,
      FormControlProps: formControlProps,
      className,
      defaultValue,
      ...props
    }: NumberInputProps,
    ref: NumberInputRef,
  ) => {
    const isFilled = controlledIsFilled ?? !isEmptyValue(value)

    return (
      <FormControl
        htmlFor={id}
        label={label}
        size={size}
        error={error}
        errorMessage={errorMessage}
        hidden={hidden}
        required={required}
        fullWidth={fullWidth}
        helperText={helperText}
        {...formControlProps}
      >
        <NumericFormat
          id={id}
          inputRef={ref}
          customInput={TextInputBase}
          value={value}
          defaultValue={defaultValue}
          size={size}
          error={error}
          fullWidth={fullWidth}
          disabled={disabled}
          className={clsx(className, { filled: isFilled, success: isSuccess })}
          allowedDecimalSeparators={['.', ',']}
          {...props}
          inputProps={{
            inputMode: 'decimal',
          }}
          type="text"
        />
      </FormControl>
    )
  },
)
