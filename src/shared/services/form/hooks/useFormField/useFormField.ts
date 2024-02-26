import { useCallback } from 'react'
import { UseControllerProps, useController } from 'react-hook-form'

import { TransformSchema, getFormErrorByName, getTransformHandler } from '../../form.utils'

export interface UseFormFieldProps<
  TValue = string,
  TOutputValue = TValue,
  TTransformValue = TValue,
  TOutputTransformValue = TTransformValue,
> extends Omit<UseControllerProps, 'control' | 'defaultValue'> {
  transform?: TransformSchema<TValue, TOutputValue, TTransformValue, TOutputTransformValue>
  defaultValue?: TTransformValue
}

export const useFormField = <
  TValue = string,
  TOutputValue = TValue,
  TTransformValue = TValue,
  TOutputTransformValue = TTransformValue,
>({
  transform,
  name,
  defaultValue,
  rules,
  shouldUnregister,
}: UseFormFieldProps<TValue, TOutputValue, TTransformValue, TOutputTransformValue>) => {
  const { field, fieldState, formState } = useController<Record<string, unknown>>({
    name,
    rules,
    defaultValue,
    shouldUnregister,
  })

  const error = getFormErrorByName(formState.errors, name)
  const { input, output } = getTransformHandler(transform)

  const onChange = useCallback(
    (value: TOutputValue) => {
      field.onChange(output(value))
    },
    [field.onChange],
  )

  const value = input(field.value as TValue)

  return { field: { ...field, onChange, value }, formState, fieldState, error }
}
