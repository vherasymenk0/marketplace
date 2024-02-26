import { FormGroup as MuiFormGroup } from '@mui/material'
import { useMemo } from 'react'

import { FormControl, FormControlProps } from '~/shared/components/base/FormControl'
import { UseFormFieldProps, combineControllerProps, useFormField } from '~/shared/services/form'
import {
  LoadSelectOptionsProps,
  RawSelectOption,
  useControlSelectOptions,
  useLoadSelectOptions,
} from '~/shared/services/selectOptions'

import { type UseRenderOptionsProps, useRenderOptions } from './hooks/useRenderOptions'
import {
  CheckboxGroupContext,
  CheckboxGroupContextValue,
  ShouldDisable,
  Value,
} from './lib/context'

export interface CheckboxGroupProps<TValue extends Value, TOption extends RawSelectOption>
  extends UseFormFieldProps<TValue | TValue[] | null>,
    Pick<FormControlProps, 'label' | 'helperText'>,
    LoadSelectOptionsProps<TOption> {
  children?: UseRenderOptionsProps<TValue>['children']
  disableGroup?: boolean
  shouldDisable?: ShouldDisable
  formControlProps?: Omit<
    FormControlProps,
    'children' | 'disabled' | 'error' | 'errorMessage' | 'label'
  >
}

export const CheckboxGroup = <TValue extends Value, TOption extends RawSelectOption>({
  label,
  disableGroup = false,
  shouldDisable,
  helperText,
  formControlProps,
  children,
  options: customOptions,
  selectOptions,
  ...props
}: CheckboxGroupProps<TValue, TOption>) => {
  const { controllerProps, ...restProps } = combineControllerProps(props)
  const formField = useFormField(controllerProps)

  const {
    field: { value, onChange, name },
    error,
  } = formField

  const { options } = useLoadSelectOptions<TOption, TValue>({
    key: selectOptions?.key || name,
    options: customOptions,
    enabled: true,
    ...selectOptions,
  })

  const { valueOption, onChangeOption } = useControlSelectOptions<TValue>({
    value,
    onChange,
    options,
    multiple: true,
  })

  const context: CheckboxGroupContextValue<TValue> = useMemo(
    () => ({
      onChange: onChangeOption,
      options,
      disabled: disableGroup,
      value: valueOption as TValue,
      shouldDisable,
    }),
    [onChangeOption, options, disableGroup, shouldDisable, valueOption],
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
      <CheckboxGroupContext.Provider value={context}>
        <MuiFormGroup {...restProps}>{newChildren}</MuiFormGroup>
      </CheckboxGroupContext.Provider>
    </FormControl>
  )
}
