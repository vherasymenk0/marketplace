import { InputAdornment } from '@mui/material'

import { DEFAULT_CURRENCY } from '~/entities/currency'

import { Text } from '../../base/Text'
import { NumberField, type NumberFieldProps } from '../NumberField '

type PriceFieldProps = Omit<NumberFieldProps, 'startAdornment' | 'endAdornment'>

export const PriceField = ({ ...props }: PriceFieldProps) => {
  return (
    <NumberField
      {...props}
      decimalScale={2}
      startAdornment={
        <InputAdornment position="start">
          <Text variant="body3" color="grey.900">
            $
          </Text>
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position="start">
          <Text variant="subtitle4" color="grey.700">
            {DEFAULT_CURRENCY}
          </Text>
        </InputAdornment>
      }
    />
  )
}
