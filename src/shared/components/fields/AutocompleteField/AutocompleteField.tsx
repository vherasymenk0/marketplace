import { useCallback } from 'react'

import { isOfType } from '~/shared/helpers/isOfType'
import { UseFormFieldProps, combineControllerProps, useFormField } from '~/shared/services/form'
import {
  LoadSelectOptionsProps,
  RawSelectOption,
  SelectOption,
  useControlSelectOptions,
  useLoadSelectOptions,
} from '~/shared/services/selectOptions'

import { Autocomplete, AutocompleteProps } from '../../inputs/Autocomplete'

export interface AutocompleteFieldProps<
  TValue extends RawSelectOption,
  TOption extends RawSelectOption,
> extends Omit<
      AutocompleteProps<SelectOption<TValue>, boolean>,
      'value' | 'onChange' | 'name' | 'defaultValue' | 'options'
    >,
    UseFormFieldProps<TValue | TValue[] | null>,
    LoadSelectOptionsProps<TOption> {}

export const AutocompleteField = <TValue extends RawSelectOption, TOption extends RawSelectOption>({
  selectOptions,
  options: customOptions,
  multiple = false,
  ...props
}: AutocompleteFieldProps<TValue, TOption>) => {
  const { controllerProps, ...restProps } = combineControllerProps(props)
  const {
    field: { value, onChange, ...field },
    error,
  } = useFormField(controllerProps)
  const { options, isLoading } = useLoadSelectOptions<TOption, TValue>({
    key: field.name,
    options: customOptions,
    ...selectOptions,
  })

  const { valueOption, onChangeOption } = useControlSelectOptions<TValue>({
    onChange,
    value,
    options,
    multiple,
  })

  const toSelectOption = useCallback(
    (newValue: string | SelectOption<TValue> | (string | SelectOption<TValue>)[] | null) => {
      const getSelectOption = (option: string | SelectOption<TValue> | null) =>
        isOfType.string(option) ? { value: option as TValue, label: option } : option

      if (isOfType.array(newValue)) {
        const newOptions = newValue
          .map((option: string | SelectOption<TValue> | null) => getSelectOption(option))
          .filter((o): o is SelectOption<TValue> => !!o)
        return newOptions
      }

      return getSelectOption(newValue)
    },
    [],
  )

  const fieldValue = valueOption ?? []

  return (
    <Autocomplete
      {...field}
      {...restProps}
      value={fieldValue}
      multiple={multiple}
      options={options}
      loading={isLoading}
      error={!!error}
      errorMessage={error}
      onChange={(_, v) => onChangeOption(toSelectOption(v))}
    />
  )
}
