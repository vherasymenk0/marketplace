import { MenuItem } from '@mui/material'

import { SelectOption } from '~/shared/services/selectOptions'

import { type SelectInputProps } from '../SelectInput'

type UseRenderList<TValue> = Pick<SelectInputProps<TValue>, 'options' | 'renderOption'>

const defaultOptions: SelectOption[] = []

export const useRenderList = <TValue,>({
  options = defaultOptions,
  renderOption,
}: UseRenderList<TValue>) => {
  return options.map<JSX.Element | undefined>((option) => {
    if (renderOption) {
      return renderOption(option)
    }

    return (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    )
  })
}
