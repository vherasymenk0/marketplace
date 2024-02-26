import { ChangeEvent, forwardRef } from 'react'

import {
  RadioWithLabel,
  RadioWithLabelProps,
  RadioWithLabelRef,
} from '~/shared/components/inputs/RadioWithLabel'
import { UseFormFieldProps, useFormField } from '~/shared/services/form'

type Value = string | boolean
interface BaseProps extends UseFormFieldProps<Value> {
  label?: RadioWithLabelProps['label']
  value?: Value
}

export type RadioFieldRef = RadioWithLabelRef
export type RadioFieldProps = BaseProps &
  Omit<RadioWithLabelProps, 'value' | 'defaultValue' | 'name'>

export const RadioField = forwardRef(
  (
    {
      transform,
      shouldUnregister,
      rules,
      name = '',
      defaultValue,
      label,
      disabled = false,
      ...restProps
    }: RadioFieldProps,
    ref: RadioFieldRef,
  ) => {
    const { field } = useFormField<Value>({
      name,
      transform,
      defaultValue,
      rules,
      shouldUnregister,
    })
    const { value: fieldValue, onChange, ...restField } = field
    const isChecked = !!fieldValue

    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value)
    }

    return (
      <RadioWithLabel
        {...restField}
        ref={ref}
        label={label}
        disabled={disabled}
        {...restProps}
        onChange={handleRadioChange}
        checked={isChecked}
      />
    )
  },
)
