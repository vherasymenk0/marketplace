import { ReactNode } from 'react'

import { isOfType } from '~/shared/helpers/isOfType'

import { CheckboxGroupOption } from '../CheckboxGroupOption'
import { CheckboxGroupContextValue, Value } from '../lib/context'

type ChildrenAsFunction<TProps extends CheckboxGroupContextValue> = (
  props: Partial<TProps>,
) => ReactNode

export interface UseRenderOptionsProps<TValue extends Value>
  extends CheckboxGroupContextValue<TValue> {
  children: ReactNode | ChildrenAsFunction<CheckboxGroupContextValue<TValue>>
}

export const useRenderOptions = <TValue extends Value>({
  children,
  options,
  onChange,
  disabled = false,
  shouldDisable,
  value,
}: UseRenderOptionsProps<TValue>) => {
  if (isOfType.function(children)) {
    return children({
      options: options ?? [],
      onChange,
      disabled,
      shouldDisable,
      value,
    })
  }

  if (children) {
    return children
  }

  const canRender = isOfType.array(options) && options.length > 0

  if (canRender) {
    return options.map((option) => (
      <CheckboxGroupOption key={option.value as string} label={option.label} value={option.value} />
    ))
  }

  return null
}
