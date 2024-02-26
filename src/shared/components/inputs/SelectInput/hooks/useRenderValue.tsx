import { useCallback } from 'react'

import { Text } from '~/shared/components/base/Text'
import { SelectOption } from '~/shared/services/selectOptions'

import { type SelectInputProps } from '../SelectInput'

type UseRenderValue<TValue> = Pick<SelectInputProps<TValue>, 'placeholder' | 'options'>

export const useRenderValue = <TValue,>({ placeholder, options = [] }: UseRenderValue<TValue>) => {
  const renderValue = useCallback(
    (selected: TValue) => {
      if (selected) {
        const selectedOption = options.find<SelectOption>(
          (option): option is SelectOption => option.value === selected,
        )

        return (
          <Text component="span" variant="body2" sx={{ fontSize: 'inherit' }} noWrap>
            {selectedOption?.label ?? 'unknown'}
          </Text>
        )
      }

      if (!placeholder) {
        return <span className="notranslate">&nbsp;</span>
      }

      return (
        <Text
          component="span"
          variant="body2"
          sx={{ fontSize: 'inherit' }}
          noWrap
          color="textSecondary"
        >
          {placeholder}
        </Text>
      )
    },
    [placeholder, options],
  )

  return renderValue
}
