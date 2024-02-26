'use client'

import { forwardRef } from 'react'

import { TextInputBaseRef } from '~/shared/components/base/TextInputBase'
import { PasswordInput } from '~/shared/components/inputs/PasswordInput'
import { useFormField } from '~/shared/services/form'

import { TextFieldProps } from '../TextField'

type Value = string | number | null | undefined

export const PasswordField = forwardRef(
  (
    {
      name,
      size,
      rules,
      value,
      transform,
      defaultValue,
      shouldUnregister,
      ...restProps
    }: TextFieldProps,
    ref: TextInputBaseRef,
  ) => {
    const { field, error } = useFormField<Value>({
      name,
      rules,
      transform,
      defaultValue: value ?? defaultValue,
      shouldUnregister,
    })

    const { value: fieldValue, onChange, ...restField } = field

    return (
      <PasswordInput
        {...restField}
        ref={ref}
        error={!!error}
        size={size ?? 'small'}
        onChange={(e) => onChange(e.target.value)}
        value={fieldValue}
        errorMessage={error}
        id={name}
        {...restProps}
        onCopy={(e) => e.preventDefault()}
      />
    )
  },
)
