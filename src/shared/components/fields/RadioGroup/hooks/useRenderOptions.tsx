import { ReactNode } from 'react'

import { isOfType } from '~/shared/helpers/isOfType'

import type { RadioGroupContextValue, Value } from '../lib/context'
import { RadioGroupOption } from '../RadioGroupOption'

type ChildrenAsFunction<TProps extends RadioGroupContextValue> = (props: TProps) => ReactNode

export interface UseRenderOptionsProps<TValue extends Value>
  extends RadioGroupContextValue<TValue> {
  children: ReactNode | ChildrenAsFunction<RadioGroupContextValue<TValue>>
}

export const useRenderOptions = <TValue extends Value>({
  children,
  disabled = false,
  options = [],
  value,
  shouldDisable,
}: UseRenderOptionsProps<TValue>) => {
  if (isOfType.function(children)) {
    return children({
      options,
      value,
      disabled,
      shouldDisable,
    })
  }

  if (children) {
    return children
  }

  const canRender = isOfType.array(options) && options.length > 0

  if (canRender) {
    return options.map((option) => {
      const isDisabled = !!shouldDisable?.(option)

      return (
        <RadioGroupOption
          key={option.label}
          label={option.label}
          value={option.value}
          disabled={isDisabled}
        />
      )
    })
  }

  return null
}
