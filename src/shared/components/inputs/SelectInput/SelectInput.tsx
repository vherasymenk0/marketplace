import { MenuItem, Select as MuiSelect, SelectProps as MuiSelectProps } from '@mui/material'
import { ForwardedRef, ReactElement, ReactNode, forwardRef } from 'react'

import SelectIcon from '~/shared/assets/icons/arrow-down.svg'
import { FormControlProps } from '~/shared/components/base/FormControl'
import { SelectOption } from '~/shared/services/selectOptions'

import { TextInput } from '../TextInput'

import { useRenderList } from './hooks/useRenderList'
import { useRenderValue } from './hooks/useRenderValue'
import { useStyles } from './SelectInput.styles'

export type SelectInputRef = ForwardedRef<HTMLInputElement>
export interface SelectInputProps<TValue>
  extends Omit<MuiSelectProps<TValue>, 'unselectable' | 'placeholder'>,
    Pick<FormControlProps, 'error' | 'errorMessage' | 'label' | 'helperText'> {
  id: string
  unselectable?: boolean
  unselectText?: ReactNode
  options: SelectOption[]
  noOptionsText?: ReactNode
  loading?: boolean
  loadingText?: ReactNode
  renderOption?: (option: SelectOption) => ReactElement | undefined
  placeholder?: string
}

const defaultSelectOptions: SelectOption[] = []

export const SelectInput = forwardRef(
  <TValue,>(
    {
      id,
      sx,
      placeholder,
      unselectable = false,
      label,
      value,
      error = false,
      errorMessage,
      options = defaultSelectOptions,
      loading = false,
      renderOption,
      multiple = false,
      fullWidth = false,
      helperText,
      unselectText = 'None',
      noOptionsText = 'No options',
      loadingText = '...Loading',
      ...props
    }: SelectInputProps<TValue>,
    ref: SelectInputRef,
  ) => {
    const styles = useStyles({ sx })

    const renderValue = useRenderValue({ options, placeholder })
    const renderList = useRenderList({
      options,
      renderOption,
    })

    const isEmptyOptions = options.length === 0
    const isDisplayEmptyItem = isEmptyOptions ?? loading
    const isDisplayUnselectItem = !isDisplayEmptyItem && unselectable && !multiple

    const input = (
      <TextInput
        id={id}
        label={label}
        error={error}
        errorMessage={errorMessage}
        fullWidth={fullWidth}
        helperText={helperText}
      />
    )

    const emptyItemText = loading ? loadingText : noOptionsText

    return (
      <MuiSelect
        ref={ref}
        value={value}
        data-testid={label}
        variant="outlined"
        displayEmpty
        input={input}
        renderValue={renderValue}
        multiple={multiple}
        fullWidth={fullWidth}
        sx={styles.select}
        IconComponent={SelectIcon}
        {...props}
      >
        {!!isDisplayEmptyItem && (
          <MenuItem disabled selected={false} value="">
            {emptyItemText}
          </MenuItem>
        )}

        {!!isDisplayUnselectItem && (
          <MenuItem selected={false} value="">
            {unselectText}
          </MenuItem>
        )}

        {!isDisplayEmptyItem && renderList}
      </MuiSelect>
    )
  },
)
