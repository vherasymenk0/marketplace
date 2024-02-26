import { SelectOption } from '~/shared/services/selectOptions'

interface ConfigFilterOptions {
  ignoreAccents?: boolean
  ignoreCase?: boolean
  limit?: number
  matchFrom?: 'any' | 'start'
  stringify?: (option: SelectOption<string>) => string
  trim?: boolean
}

const stripDiacritics = (string: string) =>
  typeof string.normalize !== 'undefined'
    ? string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    : string

export const createFilterOptions = (config = {} as ConfigFilterOptions) => {
  const {
    ignoreAccents = true,
    ignoreCase = true,
    limit,
    matchFrom = 'any',
    stringify,
    trim = false,
  } = config

  return (options: SelectOption<string>[], { inputValue }: { inputValue: string }) => {
    let input = trim ? inputValue.trim() : inputValue
    if (ignoreCase) {
      input = input.toLowerCase()
    }
    if (ignoreAccents) {
      input = stripDiacritics(input)
    }

    const filteredOptions = options.filter((option) => {
      let candidate: string = option.label

      if (typeof stringify === 'function') {
        candidate = stringify(option)
      }

      if (ignoreCase) {
        candidate = candidate?.toLowerCase()
      }
      if (ignoreAccents) {
        candidate = stripDiacritics(candidate)
      }

      return matchFrom === 'start' ? candidate.startsWith(input) : candidate.indexOf(input) > -1
    })

    return typeof limit === 'number' ? filteredOptions.slice(0, limit) : filteredOptions
  }
}
