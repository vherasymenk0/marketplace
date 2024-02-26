'use client'

import { forwardRef } from 'react'

import { TextInputBaseRef } from '~/shared/components/base/TextInputBase'
import { NumberInput, NumberInputProps } from '~/shared/components/inputs/NumberInput'
import { UseFormFieldProps, useFormField } from '~/shared/services/form'

type Value = number | null
type NumberInputCustomProps = Omit<NumberInputProps, 'value' | 'name' | 'defaultValue' | 'onChange'>
type TextFiledRef = TextInputBaseRef

export interface NumberFieldProps extends NumberInputCustomProps, UseFormFieldProps<Value> {}

export const NumberField = forwardRef(
  (
    {
      name,
      size,
      rules,
      defaultValue = null,
      transform,
      shouldUnregister,
      error: isError,
      errorMessage: controlledError,
      ...restProps
    }: NumberFieldProps,
    ref: TextFiledRef,
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
      <NumberInput
        {...restField}
        ref={ref}
        error={isError ?? !!error}
        size={size ?? 'small'}
        onValueChange={(v) => onChange(v.floatValue ?? null)}
        value={fieldValue}
        errorMessage={controlledError ?? error}
        id={name}
        {...restProps}
      />
    )
  },
)
