import { COUNTRIES } from '~/shared/constants/constants'

const COUNTRIES_CONFIG = [
  {
    name: COUNTRIES.arabEmirates,
    phoneMask: '0 0000000',
    countryCode: '971 5',
  },
  {
    name: COUNTRIES.saudiArabia,
    phoneMask: '00000000',
    countryCode: '966 5',
  },
  {
    name: COUNTRIES.kuwait,
    phoneMask: '0 0000000',
    countryCode: '965',
  },
  {
    name: COUNTRIES.qatar,
    phoneMask: '00000000',
    countryCode: '974',
  },
  {
    name: COUNTRIES.bahrain,
    phoneMask: '00000000',
    countryCode: '973',
  },
  {
    name: COUNTRIES.oman,
    phoneMask: '00000000',
    countryCode: '968',
  },
] as const

export const getPhoneDetailsByCountryName = (name: string) => {
  const currentCountry =
    COUNTRIES_CONFIG.find((country) => country.name === name) ?? COUNTRIES_CONFIG[0]

  return { mask: currentCountry.phoneMask, countryCode: currentCountry.countryCode }
}
