import { SelectChangeEvent } from '@mui/material'

import { CurrenciesModel, DEFAULT_CURRENCY } from '~/entities/currency'

import { useReactQueryState } from '~/shared/hooks/useReactQueryState'
import { Storage } from '~/shared/services/storage'

import { useCurrenciesContext } from '../context'
import { CURRENCY_KEY } from '../lib/constants'

interface Props<TValue> {
  onChange?: (event: SelectChangeEvent<TValue>, child: React.ReactNode) => void
}

const fetchCurrency = () => {
  return Promise.resolve(Storage.getLocalStorage<CurrenciesModel>(CURRENCY_KEY) ?? DEFAULT_CURRENCY)
}

export const useCurrencySelect = <TValue>({ onChange }: Props<TValue>) => {
  const [selectedCurrency, setSelectedCurrency, { isFetching }] =
    useReactQueryState<CurrenciesModel>([CURRENCY_KEY], {
      initialData: DEFAULT_CURRENCY,
      queryFn: fetchCurrency,
    })

  const { currencies } = useCurrenciesContext()

  const options = currencies.map((currency) => ({
    value: currency,
    label: currency,
  }))

  const handleChange = (event: SelectChangeEvent<TValue>, child: React.ReactNode) => {
    Storage.setLocalStorage(CURRENCY_KEY, event.target.value)
    setSelectedCurrency(event.target.value as CurrenciesModel)
    onChange?.(event, child)
  }

  return { selectedCurrency, isFetching, options, handleChange }
}
