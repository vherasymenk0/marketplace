import { ChangeEvent, forwardRef } from 'react'

import {
  CheckboxWithLabel,
  CheckboxWithLabelProps,
  CheckboxWithLabelRef,
} from '~/shared/components/inputs/CheckboxWithLabel'
import { UseFormFieldProps, useFormField } from '~/shared/services/form'

type Value = string | number | boolean

export interface CheckboxFieldProps
  extends UseFormFieldProps<Value>,
    Omit<CheckboxWithLabelProps, 'value' | 'defaultValue' | 'name'> {
  disabled?: boolean
}

export const CheckboxField = forwardRef(
  (
    {
      label,
      disabled = false,
      name,
      rules,
      transform,
      shouldUnregister,
      defaultValue,
      defaultChecked,
      ...restProps
    }: CheckboxFieldProps,
    ref: CheckboxWithLabelRef,
  ) => {
    const { field, error } = useFormField<Value>({
      name,
      rules,
      transform,
      shouldUnregister,
      defaultValue: defaultChecked ?? defaultValue,
    })
    const { value: fieldValue, onChange, ...restField } = field

    const isChecked = !!fieldValue

    const handleCheckboxChange = (_: ChangeEvent<HTMLInputElement>, newValue: boolean) => {
      onChange(newValue)
    }

    return (
      <CheckboxWithLabel
        {...restField}
        ref={ref}
        label={label}
        disabled={disabled}
        {...restProps}
        onChange={handleCheckboxChange}
        checked={isChecked}
        error={error}
      />
    )
  },
)
