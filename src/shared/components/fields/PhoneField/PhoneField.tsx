'use client'

import { forwardRef } from 'react'

import { useFormField } from '~/shared/services/form'

import { PhoneInput, PhoneInputProps } from '../../inputs/PhoneInput'
import { TextFieldProps } from '../TextField'

type CustomPhoneFieldProps = TextFieldProps & Omit<PhoneInputProps, 'onChange'>

export const PhoneField = forwardRef(
  (
    {
      name,
      rules,
      value,
      transform,
      defaultValue,
      shouldUnregister,
      ...restProps
    }: CustomPhoneFieldProps,
    _,
  ) => {
    const { field, error } = useFormField({
      name,
      rules,
      transform,
      defaultValue: value ?? defaultValue,
      shouldUnregister,
    })

    const { value: fieldValue, onChange, ...restField } = field

    return (
      <PhoneInput
        {...restField}
        error={!!error}
        onChange={onChange}
        value={fieldValue as string}
        errorMessage={error}
        id={name}
        {...restProps}
        onCopy={(e) => e.preventDefault()}
      />
    )
  },
)
