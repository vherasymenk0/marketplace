import { RadioWithLabel, RadioWithLabelProps } from '~/shared/components/inputs/RadioWithLabel'

import { useRadioGroupContext } from './lib/context'

export const RadioGroupOption = ({ label, value, ...props }: RadioWithLabelProps) => {
  const { disabled: isFieldDisabled, shouldDisable, value: selectedValue } = useRadioGroupContext()
  const isDisabled = isFieldDisabled ?? !!shouldDisable?.({ value })
  const isChecked = value === selectedValue

  return (
    <RadioWithLabel
      {...props}
      label={label}
      disabled={isDisabled}
      value={value}
      checked={isChecked}
    />
  )
}
