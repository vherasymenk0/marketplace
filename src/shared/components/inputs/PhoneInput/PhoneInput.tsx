import { InputAdornment } from '@mui/material'
import { useEffect } from 'react'
import { useIMask } from 'react-imask'

import { Text } from '../../base/Text'
import { TextInput, TextInputProps } from '../TextInput'

import { checkIsFilledPhoneNumber } from './lib/utils'
import { useStyles } from './PhoneInput.styles'

export interface PhoneInputProps extends Omit<TextInputProps, 'onChange'> {
  value?: string
  onChange: (value: string) => void
  mask?: string
  countryCode?: string
}

export const PhoneInput = ({
  value,
  onChange,
  mask = '(000) 0000-000',
  countryCode = '1',
  ...restInputProps
}: PhoneInputProps) => {
  const {
    ref,
    value: rawValue,
    unmaskedValue,
    setValue,
  } = useIMask({
    mask,
    placeholderChar: '_',
    lazy: false,
  })
  const isEmpty = !value
  const isFilled = checkIsFilledPhoneNumber(value)
  const styles = useStyles({ isEmpty })

  useEffect(() => {
    if (typeof value !== 'undefined' && value !== unmaskedValue) {
      setValue(value)
    }
  }, [value])

  useEffect(() => {
    if (value !== unmaskedValue) {
      onChange(unmaskedValue)
    }
  }, [unmaskedValue])

  return (
    <TextInput
      inputRef={ref}
      sx={styles.root}
      isFilled={isFilled}
      value={rawValue}
      startAdornment={
        <InputAdornment position="start">
          <Text>+{countryCode}</Text>
        </InputAdornment>
      }
      {...restInputProps}
    />
  )
}
