import { DatePickerProps as MuiDatePickerProps, MuiPickersAdapter } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DesktopDatePickerProps as MuiDesktopDatePickerProps } from '@mui/x-date-pickers/DesktopDatePicker'
import { LocalizationProviderProps } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDatePickerProps as MuiMobileDatePickerProps } from '@mui/x-date-pickers/MobileDatePicker'
import { StaticDatePickerProps as MuiStaticDatePickerProps } from '@mui/x-date-pickers/StaticDatePicker'
import { RefAttributes } from 'react'
import { UseControllerReturn } from 'react-hook-form'

export type MuiDatePickerComponent<TProps> = (
  props: TProps & RefAttributes<HTMLDivElement>,
) => JSX.Element & {
  propTypes?: any
}

export type DatePickerVariant = 'mobile' | 'desktop' | 'static' | 'responsive'

export interface DatePickerInstanceProps<TDate> {
  mobile: MuiMobileDatePickerProps<TDate>
  desktop: MuiDesktopDatePickerProps<TDate>
  static: MuiStaticDatePickerProps<TDate>
  responsive: MuiDatePickerProps<TDate>
}
export type DatePickersMap = Record<
  DatePickerVariant,
  <TDatePickerProps>() => Promise<MuiDatePickerComponent<TDatePickerProps> | void>
>
export type DatePickerComponentProps<
  TVariant extends DatePickerVariant,
  TDate,
> = DatePickerInstanceProps<TDate>[TVariant]

export type DatePickerProps<
  TDate = AdapterDayjs,
  TLocale = unknown,
  TVariant extends DatePickerVariant = DatePickerVariant,
> = MuiDatePickerProps<TDate> &
  Partial<UseControllerReturn['field']> & {
    localizationProviderProps?: LocalizationProviderProps<TDate, TLocale>
    dateAdapter?: new (...args: any) => MuiPickersAdapter<TDate, TLocale>
    variant: TVariant
  } & DatePickerComponentProps<TVariant, TDate> & {
    error?: boolean
  }
