'use client'

import { InputAdornment, Stack, StackProps } from '@mui/material'
import { forwardRef, useState } from 'react'

import ArrowIcon from '~/shared/assets/icons/triangle.svg'

import { IconButton } from '../../base/IconButton'
import { TextInputBaseRef } from '../../base/TextInputBase'
import { NumberInput, NumberInputProps } from '../NumberInput'

import { useStyles } from './CounterInput.styles'

type Value = number | null

export interface CounterInputProps
  extends Omit<NumberInputProps, 'onChange' | 'defaultValue' | 'min' | 'max'> {
  onChange?: (value: Value) => void
  min?: number
  max?: number
}

interface ButtonProps {
  onClick: () => void
  disabled?: boolean
}

interface CounterButtonsProps {
  increment: ButtonProps
  decrement: ButtonProps
  sx: StackProps['sx']
}

const CounterButtons = ({ increment, decrement, sx }: CounterButtonsProps) => {
  return (
    <Stack sx={sx}>
      <IconButton Icon={<ArrowIcon />} variant="text" {...increment} />
      <IconButton Icon={<ArrowIcon />} variant="text" {...decrement} />
    </Stack>
  )
}
export const CounterInput = forwardRef(
  (
    { onChange, value = 0, min = 0, max = 999999, sx, ...props }: CounterInputProps,
    ref: TextInputBaseRef,
  ) => {
    const styles = useStyles()

    const isControlledValue = Boolean(value)
    const defaultValue = isControlledValue ? value : 0

    const [inputValue, setInputValue] = useState(defaultValue ?? 0)

    const currentValue = Number(isControlledValue ? value : inputValue)

    const handleChange = (v: number) => {
      const clampedValue = Math.max(min, Math.min(max, Number(v)))
      setInputValue(clampedValue)

      onChange?.(clampedValue)
    }

    return (
      <NumberInput
        {...props}
        sx={{ ...styles.root, ...sx }}
        onValueChange={(v) => handleChange(v.floatValue ?? 0)}
        isFilled={inputValue > 0}
        value={currentValue}
        decimalScale={0}
        allowNegative={false}
        isAllowed={(values) => {
          const { floatValue } = values

          if (floatValue && floatValue > max && currentValue === max) return false
          return true
        }}
        endAdornment={
          <InputAdornment position="end">
            <CounterButtons
              sx={styles.buttons}
              increment={{
                onClick: () => handleChange(currentValue + 1),
                disabled: currentValue >= max,
              }}
              decrement={{
                onClick: () => handleChange(currentValue - 1),
                disabled: currentValue <= min,
              }}
            />
          </InputAdornment>
        }
        ref={ref}
      />
    )
  },
)
