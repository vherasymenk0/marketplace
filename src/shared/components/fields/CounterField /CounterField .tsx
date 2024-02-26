'use client'

import { forwardRef } from 'react'

import { TextInputBaseRef } from '~/shared/components/base/TextInputBase'
import { CounterInput, CounterInputProps } from '~/shared/components/inputs/CounterInput'
import { UseFormFieldProps, useFormField } from '~/shared/services/form'

type Value = number | null
type CounterInputCustomProps = Omit<
  CounterInputProps,
  'value' | 'name' | 'defaultValue' | 'onChange'
>

export interface CounterFieldProps extends CounterInputCustomProps, UseFormFieldProps<Value> {}

export const CounterField = forwardRef(
  (
    {
      name,
      rules,
      defaultValue = null,
      transform,
      shouldUnregister,
      error: isError,
      errorMessage: controlledError,
      ...restProps
    }: CounterFieldProps,
    ref: TextInputBaseRef,
  ) => {
    const { field, error } = useFormField({
      name,
      rules,
      defaultValue,
      shouldUnregister,
      transform,
    })

    const { value: fieldValue, onChange, ...restField } = field

    return (
      <CounterInput
        {...restField}
        ref={ref}
        error={isError ?? !!error}
        onChange={onChange}
        value={fieldValue}
        errorMessage={controlledError ?? error}
        id={name}
        {...restProps}
      />
    )
  },
)
