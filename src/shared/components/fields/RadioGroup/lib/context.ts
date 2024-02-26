import { contextFactory } from '~/shared/helpers/contextFactory'
import { SelectOption } from '~/shared/services/selectOptions'

export type ShouldDisable = <TProps extends { value: unknown; [key: string]: unknown }>(
  arg: TProps,
) => boolean

export type Value = string | null | undefined

export interface RadioGroupContextValue<TValue extends Value = Value> {
  disabled?: boolean
  shouldDisable: ShouldDisable | undefined
  value: TValue
  options: SelectOption<unknown>[]
}

export const [useRadioGroupContext, RadioGroupContext] =
  contextFactory<RadioGroupContextValue<Value>>()
