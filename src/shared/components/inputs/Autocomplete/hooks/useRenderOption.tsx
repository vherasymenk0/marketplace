import { MenuItem } from '@mui/material'

import { UnknownSelectOption } from '~/shared/services/selectOptions'

import { Checkbox } from '../../Checkbox'
import { useMenuListStyles } from '../Autocomplete.styles'
import { RenderOptionProps } from '../lib/types'

export const useRenderOption = () => {
  const styles = useMenuListStyles()

  const renderOption = <TOption extends UnknownSelectOption>({
    option,
    isMultiple,
    isSelected,
    itemProps,
  }: RenderOptionProps<TOption>) => {
    if (!isMultiple)
      return (
        <MenuItem {...itemProps} selected={isSelected}>
          {option.label}
        </MenuItem>
      )

    return (
      <MenuItem {...itemProps} selected={isSelected} sx={styles.multipleMenuItem}>
        <Checkbox checked={isSelected} sx={{ mr: 1.25 }} />
        {option.label}
      </MenuItem>
    )
  }

  return renderOption
}
