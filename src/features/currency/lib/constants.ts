import { FormatNumberOptions } from 'react-intl'

import { DEFAULT_CURRENCY } from '~/entities/currency'

export const CURRENCY_KEY = 'currency'

export const CURRENCY_FORMAT_OPTIONS: FormatNumberOptions = {
  style: 'currency',
  currency: DEFAULT_CURRENCY,
  maximumFractionDigits: 2,
  useGrouping: false,
}
