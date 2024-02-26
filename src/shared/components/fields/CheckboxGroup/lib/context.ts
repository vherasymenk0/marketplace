import { contextFactory } from '~/shared/helpers/contextFactory'
import { SelectOption } from '~/shared/services/selectOptions'

export type ShouldDisable = <TProps extends { value: unknown; [key: string]: unknown }>(
  arg: TProps,
) => boolean

export type Value = string | number | boolean | string[] | number[] | boolean[] | undefined

export interface CheckboxGroupContextValue<TValue extends Value = Value> {
  disabled?: boolean
  onChange: (newValue: SelectOption<any> | SelectOption<any>[] | null) => void
  shouldDisable?: ShouldDisable
  options: SelectOption<unknown>[]
  value?: TValue
}

export const [useCheckboxGroupContext, CheckboxGroupContext] =
  contextFactory<CheckboxGroupContextValue<Value>>()
