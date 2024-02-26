'use client'

import { forwardRef } from 'react'

import { TextInputBaseRef } from '~/shared/components/base/TextInputBase'
import { TextInput, TextInputProps } from '~/shared/components/inputs/TextInput'
import { UseFormFieldProps, useFormField } from '~/shared/services/form'

type Value = string | number | null | undefined

type TextInputCustomProps = Omit<TextInputProps, 'value' | 'name' | 'defaultValue' | 'onChange'>

type TextFiledRef = TextInputBaseRef
export interface TextFieldProps extends TextInputCustomProps, UseFormFieldProps<Value> {
  value?: Value
  hideError?: boolean
}

export const TextField = forwardRef(
  (
    {
      name,
      size,
      rules,
      value,
      transform,
      defaultValue = '',
      shouldUnregister,
      error: isError,
      errorMessage: controlledError,
      hideError,
      ...restProps
    }: TextFieldProps,
    ref: TextFiledRef,
  ) => {
    const { field, error } = useFormField<Value>({
      name,
      rules,
      transform,
      defaultValue: value ?? defaultValue,
      shouldUnregister,
    })

    const { value: fieldValue, onChange, ...restField } = field
    const errorMessage = hideError ? '' : controlledError ?? error

    return (
      <TextInput
        {...restField}
        ref={ref}
        error={isError ?? !!error}
        size={size ?? 'small'}
        onChange={(e) => onChange(e.target.value)}
        value={fieldValue}
        errorMessage={errorMessage}
        id={name}
        {...restProps}
      />
    )
  },
)
