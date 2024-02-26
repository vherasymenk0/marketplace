import { ChangeEvent, useMemo } from 'react'

import {
  CheckboxWithLabel,
  CheckboxWithLabelProps,
} from '~/shared/components/inputs/CheckboxWithLabel'
import { isOfType } from '~/shared/helpers/isOfType'

import { useCheckboxGroupContext } from './lib/context'
import { getIsSelected } from './lib/utils'

export const CheckboxGroupOption = ({
  value: option,
  label,
  ...props
}: Omit<CheckboxWithLabelProps, 'name'>) => {
  const {
    disabled: isFieldDisabled,
    shouldDisable,
    onChange,
    value: selectedValue,
  } = useCheckboxGroupContext()

  const isDisabled = isFieldDisabled ?? !!shouldDisable?.({ value: option })

  const isSelected = useMemo(() => {
    if (!isOfType.array(selectedValue)) {
      return getIsSelected(selectedValue, option)
    }

    return selectedValue.some((selected) => getIsSelected(selected, option))
  }, [selectedValue, option])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    if (Array.isArray(value)) {
      onChange(value)
      return
    }

    onChange({ value, label: value })
  }

  return (
    <CheckboxWithLabel
      {...props}
      label={label}
      value={option}
      disabled={isDisabled}
      checked={isSelected}
      onChange={handleChange}
    />
  )
}
