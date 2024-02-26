import { z } from 'zod'

import { CURRENCIES_ENUM } from '../lib/data'

export const CurrenciesSchemaModel = z.enum(CURRENCIES_ENUM)

export const CurrenciesSchemaResponse = z.object({
  currencies: z.array(CurrenciesSchemaModel),
})

export const CurrenciesRatesSchema = z.object({
  USD: z.number(),
  AED: z.number().optional(),
  BHD: z.number().optional(),
  SAR: z.number().optional(),
  OMR: z.number().optional(),
  KWD: z.number().optional(),
  QAR: z.number().optional(),
})

export type CurrenciesModel = z.infer<typeof CurrenciesSchemaModel>
export type CurrenciesRatesModel = z.infer<typeof CurrenciesRatesSchema>
