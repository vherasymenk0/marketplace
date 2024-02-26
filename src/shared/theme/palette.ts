import { PaletteOptions } from '@mui/material'

export type CustomPaletteOptionsType = PaletteOptions
export type PaletteType = typeof palette

export const palette = {
  common: {
    black: '#000',
    white: '#fff',
  },
  primary: {
    main: '#005469',
    dark: '#002D38',
    400: '#F8FCFD',
    500: '#E1EBED',
    600: '#B3CCD2',
    800: '#003D4D',
  },
  secondary: {
    main: '#0B090A',
    500: '#DADADA',
    600: '#6D6B6C',
    700: '#545354',
    800: '#232223',
  },
  grey: {
    900: '#333333',
    800: '#474747',
    700: '#5C5C5C',
    600: '#858585',
    500: '#999999',
    400: '#ADADAD',
    300: '#C2C2C2',
    200: '#EAEAEA',
    100: '#F5F5F5',
    50: '#FBFCFD',
    25: '#FFFFFF',
  },
  success: {
    main: '#039855',
    dark: '#05603A',
    light: '#D1FADF',
  },
  warning: {
    main: '#F79009',
    dark: '#DC6803',
    light: '#FEF0C7',
  },
  error: {
    main: '#D92D20',
    dark: '#7A271A',
    medium: '#FECDCA',
    light: '#FDEFEE',
  },
  info: {
    main: '#175CD3',
    dark: '#194185',
    light: '#EFF8FF',
  },
}
