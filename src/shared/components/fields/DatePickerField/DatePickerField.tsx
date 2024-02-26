import { Dayjs } from 'dayjs'
import { forwardRef } from 'react'

import { type UseFormFieldProps, useFormField } from '~/shared/services/form'

import { FormControl, type FormControlProps } from '../../base/FormControl'
import {
  DatePickerInput,
  type DatePickerProps,
  type DatePickerRef,
} from '../../inputs/DatePickerInput'

type Value = Dayjs | null

export type DatePickerFieldRef = DatePickerRef
export type DatePickerFieldProps<TDate = Value, TLocale = Value> = DatePickerProps<
  TDate,
  TLocale,
  'desktop'
> &
  Pick<FormControlProps, 'label' | 'helperText'> &
  UseFormFieldProps<Value> & {
    formControlProps?: Omit<FormControlProps, 'label' | 'helperText'>
    datePickerLabel?: DatePickerProps<TDate, TLocale, 'desktop'>['label']
    required?: boolean
  }

export const DatePickerField = forwardRef(
  (
    {
      name,
      shouldUnregister,
      transform,
      defaultValue = null,
      rules,
      label,
      datePickerLabel,
      helperText,
      formControlProps,
      required,
      ...restProps
    }: DatePickerFieldProps,
    ref: DatePickerFieldRef,
  ) => {
    const { field, error } = useFormField<Value>({
      name,
      transform,
      defaultValue,
      shouldUnregister,
      rules,
    })

    const isError = !!error

    return (
      <FormControl
        label={label}
        helperText={helperText}
        error={isError}
        errorMessage={error}
        required={required}
        {...formControlProps}
      >
        <DatePickerInput
          inputRef={ref}
          label={datePickerLabel}
          error={isError}
          {...restProps}
          {...field}
        />
      </FormControl>
    )
  },
)
