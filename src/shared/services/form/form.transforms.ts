import { TransformSchema, getFormValue } from './form.utils'

export const transformFieldInEmail: TransformSchema<unknown, string, string, string> = {
  input: (value: unknown) => String(value ?? '').toLowerCase(),
  output: (value: string) => getFormValue(value ?? '').toLowerCase(),
}

export const transformFieldInPositiveNumber = {
  input: (value: number) => {
    if (value === undefined) return ''

    return Number.isNaN(value) || value === 0 ? 0 : Math.abs(value)
  },
  output: (value: string) => {
    const output = parseInt(getFormValue(value), 10)
    const newValue = Number.isNaN(output) ? 0 : output

    return Math.abs(newValue)
  },
}
