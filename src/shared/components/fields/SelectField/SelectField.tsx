import { forwardRef } from 'react'

import { type UseFormFieldProps, useFormField } from '~/shared/services/form'
import {
  LoadSelectOptionsProps,
  RawSelectOption,
  useLoadSelectOptions,
} from '~/shared/services/selectOptions'

import { SelectInput } from '../../inputs/SelectInput'
import type { SelectInputProps, SelectInputRef } from '../../inputs/SelectInput'

type Value = string | string[] | null

export type SelectFieldRef = SelectInputRef
export interface SelectFieldProps<TValue>
  extends Omit<
      SelectInputProps<TValue>,
      'value' | 'onChange' | 'defaultValue' | 'name' | 'options' | 'id'
    >,
    LoadSelectOptionsProps,
    UseFormFieldProps<TValue> {
  id?: string
}

export const SelectField = forwardRef(
  (
    {
      name,
      id = name,
      transform,
      rules,
      defaultValue,
      shouldUnregister,
      options: customOptions,
      selectOptions,
      multiple = false,
      ...restProps
    }: SelectFieldProps<Value>,
    ref: SelectFieldRef,
  ) => {
    const {
      error,
      field: { onChange, value, ...field },
    } = useFormField<Value>({
      name,
      rules,
      transform,
      defaultValue,
      shouldUnregister,
    })

    const { options } = useLoadSelectOptions<RawSelectOption, string>({
      ...selectOptions,
      key: selectOptions?.key || name,
      options: customOptions,
    })

    const newDefaultValue = multiple ? [] : ''
    const newValue = value ?? newDefaultValue
    return (
      <SelectInput
        id={id}
        error={!!error}
        errorMessage={error}
        multiple={multiple}
        {...field}
        {...restProps}
        ref={ref}
        onChange={(e) => onChange(e.target.value as Value)}
        value={newValue}
        options={options}
      />
    )
  },
)
