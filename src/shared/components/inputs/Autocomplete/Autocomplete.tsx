import {
  AutocompleteRenderInputParams,
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
} from '@mui/material'
import clsx from 'clsx'
import { ForwardedRef, forwardRef, useCallback } from 'react'

import SelectIcon from '~/shared/assets/icons/arrow-down.svg'
import CloseIcon from '~/shared/assets/icons/close.svg'
import { isEmptyValue } from '~/shared/helpers/isEmptyValue'
import { SelectOption } from '~/shared/services/selectOptions'

import { SvgIcon } from '../../base/SvgIcon'
import { TextInput, type TextInputProps } from '../TextInput'

import { useRenderOption } from './hooks/useRenderOption'
import { RenderOptionProps } from './lib/types'

export interface AutocompleteProps<
  TOption,
  TMultiple extends boolean = false,
  TDisableClearable extends boolean = false,
  TFreeSolo extends boolean = false,
> extends Omit<
    MuiAutocompleteProps<TOption, TMultiple, TDisableClearable, TFreeSolo>,
    'renderInput' | 'ref' | 'fullWidth' | 'renderOption'
  > {
  label?: TextInputProps['label']
  startAdornment?: TextInputProps['startAdornment']
  endAdornment?: TextInputProps['endAdornment']
  name?: TextInputProps['name']
  error?: TextInputProps['error']
  errorMessage?: TextInputProps['errorMessage']
  inputProps?: TextInputProps
  required?: TextInputProps['required']
  helperText?: TextInputProps['helperText']
  fullWidth?: TextInputProps['fullWidth']
  isSuccess?: boolean
  renderOption?: (props: RenderOptionProps<any>) => JSX.Element
}

export const Autocomplete = forwardRef(
  <
    TOption extends SelectOption<unknown, Record<string, unknown>>,
    TMultiple extends boolean = false,
    TDisableClearable extends boolean = false,
    TFreeSolo extends boolean = false,
  >(
    {
      loading = false,
      label,
      value,
      startAdornment,
      endAdornment,
      name = '',
      error = false,
      errorMessage,
      required = false,
      multiple = false as TMultiple,
      inputProps,
      placeholder = '',
      helperText,
      fullWidth = false,
      isSuccess,
      size = 'medium',
      ChipProps: chipProps,
      renderOption: renderCustomOption,
      ...rest
    }: AutocompleteProps<TOption, TMultiple, TDisableClearable, TFreeSolo>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const isFilled = !isEmptyValue(value)

    const renderInput = useCallback(
      ({ InputProps, ...params }: AutocompleteRenderInputParams): JSX.Element => {
        return (
          <TextInput
            {...params}
            {...InputProps}
            {...inputProps}
            fullWidth
            className={clsx(inputProps?.className, { filled: isFilled, success: isSuccess })}
            placeholder={placeholder}
            label={label}
            name={name}
            error={error}
            size={size}
            errorMessage={errorMessage}
            required={required}
            helperText={helperText}
            startAdornment={
              <>
                {startAdornment}
                {InputProps.startAdornment}
              </>
            }
            endAdornment={
              <>
                {endAdornment}
                {InputProps.endAdornment}
              </>
            }
          />
        )
      },
      [
        label,
        name,
        startAdornment,
        endAdornment,
        error,
        errorMessage,
        inputProps,
        required,
        placeholder,
        helperText,
        fullWidth,
        isFilled,
        isSuccess,
        size,
      ],
    )

    const renderOption = useRenderOption()

    return (
      <MuiAutocomplete
        ref={ref}
        value={value}
        loadingText="...Loading"
        renderInput={renderInput}
        disableClearable={true as TDisableClearable}
        {...rest}
        multiple={multiple}
        size={size}
        fullWidth={fullWidth}
        loading={loading}
        ChipProps={{
          deleteIcon: <SvgIcon icon={CloseIcon} size={16} />,
          ...chipProps,
        }}
        popupIcon={<SvgIcon icon={SelectIcon} />}
        renderOption={(itemProps, option, { selected }) => {
          const props = { option, isSelected: selected, isMultiple: multiple, itemProps }

          if (renderCustomOption) return renderCustomOption(props)

          return renderOption(props)
        }}
      />
    )
  },
)
