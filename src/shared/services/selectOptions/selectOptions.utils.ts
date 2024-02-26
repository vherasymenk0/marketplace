/* eslint-disable no-shadow */

import { isOfType } from '~/shared/helpers/isOfType'

import { RawSelectOption, SelectOption } from './selectOptions.types'

export const getOptionValue = (option: unknown): unknown =>
  // eslint-disable-next-line no-nested-ternary
  isOfType.string(option) ? option : isOfType.object(option) && option?.value ? option?.value : null

export const getOptionLabel = (option: unknown) =>
  // eslint-disable-next-line no-nested-ternary
  isOfType.string(option)
    ? option
    : isOfType.object(option) && isOfType.string(option?.label)
    ? option.label
    : ''

type FormatData<TOption> = TOption extends string | number ? never : TOption

export const formatOption = <TOption extends RawSelectOption = RawSelectOption, TValue = unknown>({
  option,
  getValue = getOptionValue,
  getLabel = getOptionLabel,
}: {
  option: TOption
  getValue: (option: TOption) => unknown
  getLabel: (option: TOption) => string
}): SelectOption<TValue, FormatData<TOption>> => {
  if (isOfType.object(option)) {
    const value = getValue(option)
    const label = getLabel(option)

    return {
      ...(option as unknown as Record<string, unknown>),
      value,
      label,
    } as SelectOption<TValue, FormatData<TOption>>
  }

  if (isOfType.number(option)) {
    return { value: option, label: String(option) } as SelectOption<TValue, FormatData<TOption>>
  }

  return { value: option, label: option } as unknown as SelectOption<TValue, FormatData<TOption>>
}

export const getOptionByValue = <TValue, TOption extends Record<string, unknown>>({
  value,
  options,
}: {
  value: TValue
  options: SelectOption<TValue, TOption>[]
}) => {
  const formatValue = (v: unknown) => {
    if (isOfType.object(v)) {
      return JSON.stringify(v)
    }

    return String(v).toLowerCase()
  }

  return options.find((option) => formatValue(option.value) === formatValue(value))
}

export const isOptionEqualToValue = <TValue, TOption extends SelectOption<TValue>>(
  option: SelectOption<TValue, TOption>,
  value: SelectOption<TValue, TOption> | SelectOption<TValue, TOption>[],
): boolean => {
  const getValue = (v: SelectOption<TValue, TOption>) => v?.value ?? v

  if (isOfType.array(value)) {
    return !!value.find((item) => getValue(item) === getValue(option))
  }

  return getValue(option) === getValue(value)
}
