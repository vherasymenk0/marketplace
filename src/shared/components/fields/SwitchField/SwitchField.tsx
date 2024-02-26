import { forwardRef, useCallback } from 'react'

import { Switch, SwitchProps, SwitchRef } from '~/shared/components/inputs/Switch'
import { UseFormFieldProps, useFormField } from '~/shared/services/form'

type Value = boolean

export type SwitchFieldRef = SwitchRef
export interface SwitchFieldProps
  extends Omit<SwitchProps, 'value' | 'defaultValue' | 'name'>,
    UseFormFieldProps<Value> {
  value?: Value
}

export const SwitchField = forwardRef(
  (
    {
      name,
      value,
      rules,
      transform,
      shouldUnregister,
      defaultValue = false,
      ...restProps
    }: SwitchFieldProps,
    ref: SwitchRef,
  ) => {
    const { field } = useFormField<Value>({
      name,
      rules,
      transform,
      shouldUnregister,
      defaultValue: value ?? defaultValue,
    })
    const { onChange, ...restOfField } = field

    const handleSwitchChange = useCallback(
      (newValue: boolean) => {
        onChange(newValue)
      },
      [onChange],
    )

    return (
      <Switch
        {...restOfField}
        ref={ref}
        onChange={(_, newValue) => handleSwitchChange(newValue)}
        {...restProps}
      />
    )
  },
)
