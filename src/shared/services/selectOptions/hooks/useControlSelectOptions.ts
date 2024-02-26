import { useCallback, useMemo } from 'react'

import { isOfType } from '~/shared/helpers/isOfType'

import { SelectOption } from '../selectOptions.types'
import { getOptionByValue } from '../selectOptions.utils'

interface UseControlSelectOptions<
  TValue,
  TOption extends Record<string, unknown> = Record<string, unknown>,
> {
  options: SelectOption<TValue, TOption>[]
  unselectable?: boolean
  value: TValue | TValue[] | null
  onChange: (value: TValue | TValue[] | null) => void
  multiple?: boolean
}

export const useControlSelectOptions = <
  TValue,
  TOption extends Record<string, unknown> = Record<string, unknown>,
>({
  value,
  onChange,
  options,
  unselectable,
  multiple,
}: UseControlSelectOptions<TValue, TOption>) => {
  const valueOption = useMemo(() => {
    const isOptions = !!options.length
    const isArray = isOfType.array(value)
    const isMultiple = multiple && isArray

    if (!value || !isOptions) return multiple ? [] : null
    if (isMultiple && !value.length) {
      return []
    }

    if (isMultiple) {
      const isOption = (
        item: ReturnType<typeof getOptionByValue<TValue, TOption>>,
      ): item is NonNullable<ReturnType<typeof getOptionByValue<TValue, TOption>>> => {
        return !!item
      }

      return value
        .map((currValue) =>
          getOptionByValue<TValue, TOption>({
            value: currValue,
            options,
          }),
        )
        .filter(isOption) as unknown as SelectOption<TValue, TOption>[]
    }

    const isPrimitiveValue = isOfType.string(value) || isOfType.number(value)
    const isObject = isOfType.object(value) && !isArray
    if (isPrimitiveValue || isObject) {
      return getOptionByValue({ value, options })
    }

    return multiple ? [] : null
  }, [value, options, multiple])

  const onChangeOption = useCallback(
    (newOrChangedValue: SelectOption<TValue> | SelectOption<TValue>[] | null) => {
      const isChangedValue = isOfType.array(newOrChangedValue)
      const isNewValue = !isChangedValue
      const isArray = isOfType.array(valueOption)

      if (isChangedValue && multiple) {
        onChange(newOrChangedValue.map((o) => (isOfType.string(o) ? (o as TValue) : o.value)))

        return
      }

      if (isNewValue && isArray && multiple && newOrChangedValue) {
        const valueLength = valueOption?.length
        const filteredValue = valueOption?.reduce((acc, { value: v }) => {
          const hasEqualValues = v === newOrChangedValue.value
          return hasEqualValues ? acc : [...acc, v]
        }, [] as TValue[])
        const newValueLength = filteredValue?.length

        if (valueLength === newValueLength) {
          onChange([...filteredValue, newOrChangedValue.value])
        } else {
          onChange([...filteredValue])
        }
        return
      }

      if (unselectable && isNewValue && !multiple && !isArray && valueOption) {
        const isEqual = newOrChangedValue?.value === valueOption.value
        const newValue = isEqual ? null : newOrChangedValue?.value

        onChange(newValue ?? null)
        return
      }

      if (isNewValue && !multiple) {
        onChange(newOrChangedValue ? newOrChangedValue.value : null)
      }
    },
    [onChange, unselectable, valueOption, multiple],
  )

  return {
    valueOption,
    onChangeOption,
  }
}
