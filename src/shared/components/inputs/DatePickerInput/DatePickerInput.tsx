'use client'

import { DesktopDatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs, { Dayjs } from 'dayjs'
import { ForwardedRef, forwardRef } from 'react'

import CalendarIcon from '~/shared/assets/icons/calendar.svg'
import { isOfType } from '~/shared/helpers/isOfType'

import { useStyles } from './DatePickerInput.styles'
import type { DatePickerProps } from './DatePickerInput.types'

export type DatePickerRef = ForwardedRef<HTMLInputElement>

const DatePickerInputComponent = (
  {
    dateAdapter,
    localizationProviderProps,
    value,
    error,
    onChange,
    ...props
  }: DatePickerProps<Dayjs | null, unknown, 'desktop'>,
  ref: DatePickerRef,
) => {
  const styles = useStyles()
  const dayjsValue = value ? dayjs(value as string) : null

  const handleChange = (date: Dayjs | null) => {
    if (onChange && !isOfType.null(date)) {
      onChange(dayjs(date).format())
    }
  }

  return (
    <LocalizationProvider
      dateAdapter={dateAdapter ?? (AdapterDayjs as unknown as typeof dateAdapter)}
      {...localizationProviderProps}
    >
      <DesktopDatePicker
        slots={{
          openPickerIcon: CalendarIcon,
        }}
        sx={styles.root}
        value={dayjsValue}
        slotProps={{
          calendarHeader: {
            sx: styles.header,
          },
          popper: {
            placement: 'bottom-end',
            popperOptions: {
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: [0, 10],
                  },
                },
              ],
            },
          },
          day: {
            sx: styles.day,
          },
          textField: {
            error,
          },
          desktopPaper: {
            sx: styles.paper,
          },
        }}
        onChange={handleChange}
        {...props}
        inputRef={ref}
      />
    </LocalizationProvider>
  )
}

export const DatePickerInput = forwardRef(DatePickerInputComponent) as <TData, TLocale>(
  props: DatePickerProps<TData, TLocale, 'desktop'> & {
    ref?: DatePickerRef
  },
) => ReturnType<typeof DatePickerInputComponent>
