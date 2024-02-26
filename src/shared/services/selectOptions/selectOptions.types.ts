export type RawSelectOption = Record<string, unknown> | string | number

export type SelectOption<
  TValue = string,
  TOption extends Record<string, unknown> = Record<string, unknown>,
> = TOption & {
  value: TValue
  label: string
  subtitle?: string
}

export type UnknownSelectOption<TValue = unknown> = SelectOption<TValue, Record<string, unknown>>
