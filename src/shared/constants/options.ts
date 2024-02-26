import { COUNTRIES } from './constants'

export const COUNTRY_OPTIONS = [
  COUNTRIES.arabEmirates,
  COUNTRIES.saudiArabia,
  COUNTRIES.kuwait,
  COUNTRIES.qatar,
  COUNTRIES.bahrain,
  COUNTRIES.oman,
] as const

export const MUTABLE_COUNTRY_OPTIONS = [...COUNTRY_OPTIONS]
