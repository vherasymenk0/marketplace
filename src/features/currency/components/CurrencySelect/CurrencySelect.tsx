'use client'

import { Box } from '@mui/material'
import { forwardRef } from 'react'

import {
  SelectInput,
  SelectInputProps,
  SelectInputRef,
} from '~/shared/components/inputs/SelectInput'

import { useCurrencySelect } from '../../hooks/useCurrencySelect'

import { useStyles } from './CurrencySelect.styles'

interface Props<TValue>
  extends Omit<SelectInputProps<TValue>, 'id' | 'options' | 'ref' | 'defaultValue' | 'color'> {
  color?: 'light' | 'dark'
}

export const CurrencySelect = forwardRef(
  <TValue,>({ color = 'dark', sx, onChange, ...rest }: Props<TValue>, ref: SelectInputRef) => {
    const styles = useStyles({ color })
    const { selectedCurrency, options, isFetching, handleChange } = useCurrencySelect({ onChange })

    if (isFetching) return null

    return (
      <Box sx={{ ...styles.wrapper, ...sx }}>
        <SelectInput
          fullWidth
          id="currency-select"
          value={selectedCurrency as TValue}
          options={options}
          sx={styles.select}
          ref={ref}
          onChange={handleChange}
          {...rest}
          MenuProps={{ PaperProps: { sx: styles.paper } }}
        />
      </Box>
    )
  },
)
