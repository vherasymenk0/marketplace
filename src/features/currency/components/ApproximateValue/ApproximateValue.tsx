'use client'

import { Box, Stack, TypographyProps } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { FormattedMessage, FormattedNumber } from 'react-intl'

import { CurrenciesModel, CurrenciesRatesModel, DEFAULT_CURRENCY } from '~/entities/currency'

import { Text } from '~/shared/components/base/Text'

import { CURRENCY_FORMAT_OPTIONS, CURRENCY_KEY } from '../../lib/constants'

interface Props extends TypographyProps {
  price: CurrenciesRatesModel
  shortLabel?: boolean
}

export const ApproximateValue = ({
  price,
  variant = 'body4',
  color = 'grey.600',
  width = '100%',
  shortLabel = false,
  ...rest
}: Props) => {
  const { data: selectedCurrency, isFetching } = useQuery<CurrenciesModel>([CURRENCY_KEY])
  const isCurrencyUnavailable = isFetching || !selectedCurrency
  const isSelectedDefaultCurrency = selectedCurrency === DEFAULT_CURRENCY
  const approximateValue = selectedCurrency ? price[selectedCurrency] : null

  if (isCurrencyUnavailable || isSelectedDefaultCurrency || !approximateValue) return null

  return (
    <Text variant={variant} color={color} width={width} {...rest}>
      <Stack direction="row" justifyContent="space-between">
        {shortLabel ? (
          <FormattedMessage id="currency.approximateLabel.short" defaultMessage="Approx." />
        ) : (
          <FormattedMessage id="currency.approximateLabel.full" defaultMessage="Approximate" />
        )}
        &nbsp;
        <Box>
          <FormattedNumber
            value={approximateValue}
            {...CURRENCY_FORMAT_OPTIONS}
            currency={selectedCurrency}
          />
        </Box>
      </Stack>
    </Text>
  )
}
