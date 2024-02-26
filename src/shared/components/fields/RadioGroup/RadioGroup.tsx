import { RadioGroup as MuiRadioGroup, RadioGroupProps as MuiRadioGroupProps } from '@mui/material'
import { ChangeEvent, ReactNode, useCallback, useMemo } from 'react'

import { FormControl, FormControlProps } from '~/shared/components/base/FormControl'
import { UseFormFieldProps, combineControllerProps, useFormField } from '~/shared/services/form'
import {
  LoadSelectOptionsProps,
  RawSelectOption,
  useControlSelectOptions,
  useLoadSelectOptions,
} from '~/shared/services/selectOptions'

import { UseRenderOptionsProps, useRenderOptions } from './hooks/useRenderOptions'
import { RadioGroupContext, RadioGroupContextValue, ShouldDisable, Value } from './lib/context'

export interface RadioGroupProps<TValue extends Value, TOption extends RawSelectOption>
  extends UseFormFieldProps<TValue | TValue[] | null>,
    Omit<MuiRadioGroupProps, 'value' | 'defaultValue' | 'onChange' | 'name' | 'children'>,
    LoadSelectOptionsProps<TOption> {
  label?: FormControlProps['label']
  children?: UseRenderOptionsProps<TValue>['children']
  helperText?: NonNullable<ReactNode>
  disableGroup?: boolean
  shouldDisable?: ShouldDisable
  formControlProps?: Omit<
    FormControlProps,
    'children' | 'disabled' | 'error' | 'errorMessage' | 'label'
  >
}

export const RadioGroup = <TValue extends Value, TOption extends RawSelectOption>({
  label,
  disableGroup = false,
  shouldDisable,
  helperText,
  formControlProps,
  children,
  options: initialOptions,
  selectOptions,
  ...props
}: RadioGroupProps<TValue, TOption>) => {
  const { controllerProps, ...restProps } = combineControllerProps(props)
  const formField = useFormField(controllerProps)

  const {
    field: { name, value, onChange },
    error,
  } = formField

  const { options } = useLoadSelectOptions<TOption, TValue>({
    key: selectOptions?.key || name,
    options: initialOptions ?? [],
    enabled: true,
    ...selectOptions,
  })

  const { valueOption, onChangeOption } = useControlSelectOptions<TValue>({
    value,
    onChange,
    options,
  })

  const context: RadioGroupContextValue<TValue> = useMemo(
    () => ({
      disabled: disableGroup,
      value: value as TValue,
      options,
      shouldDisable,
    }),
    [disableGroup, options, shouldDisable, value],
  )

  const handleOptionChange = useCallback(
    (_: ChangeEvent<HTMLInputElement>, newValue: string) => {
      onChangeOption({ value: newValue as TValue, label: newValue })
    },
    [onChangeOption],
  )

  const newChildren = useRenderOptions({ children, ...context })

  return (
    <FormControl
      label={label}
      disabled={disableGroup}
      error={!!error}
      errorMessage={error}
      helperText={helperText}
      {...formControlProps}
    >
      <MuiRadioGroup onChange={handleOptionChange} value={valueOption} {...restProps}>
        <RadioGroupContext.Provider value={context}>{newChildren}</RadioGroupContext.Provider>
      </MuiRadioGroup>
    </FormControl>
  )
}
