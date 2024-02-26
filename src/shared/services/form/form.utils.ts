import { ChangeEvent } from 'react'
import { ErrorOption, FieldErrors, FieldValues, UseFormHandleSubmit } from 'react-hook-form'

import { getObjectProperty } from '~/shared/helpers/getObjectProperty'
import { isOfType } from '~/shared/helpers/isOfType'

export const getFormErrorByName = (
  errors: FieldErrors,
  name: string,
): string | null | undefined => {
  const error = getObjectProperty(errors, name)

  if (isOfType.object(error) && error.message) {
    return (error as ErrorOption)?.message
  }

  return null
}

export interface TransformSchema<
  TValue,
  TOutputValue = TValue,
  TTransformValue = TValue,
  TOutputTransformValue = TTransformValue,
> {
  input: (value: TValue) => TTransformValue
  output: (value: TOutputValue) => TOutputTransformValue
}

export const getTransformHandler = <
  TValue = string,
  TOutputValue = TValue,
  TTransformValue = TValue,
  TOutputTransformValue = TTransformValue,
>(
  transform?: TransformSchema<TValue, TOutputValue, TTransformValue, TOutputTransformValue>,
): TransformSchema<TValue, TOutputValue, TTransformValue, TOutputTransformValue> => {
  const defaultSchema = {
    input: (v: TValue) => v as unknown as TTransformValue,
    output: (v: TOutputValue) => v as unknown as TOutputTransformValue,
  }

  return { ...defaultSchema, ...transform }
}

const isChangeEvent = (obj: unknown): obj is ChangeEvent<HTMLInputElement> =>
  isOfType.object(obj) &&
  'target' in obj &&
  typeof (obj as { target: unknown }).target === 'object' &&
  'value' in (obj as { target: { value: unknown } }).target

export const getFormValue = <TValue = unknown>(value: TValue) => {
  if (isChangeEvent(value)) {
    return value.target.value
  }

  return value
}

export const combineControllerProps = <TProps extends { name: string; [key: string]: unknown }>(
  props: TProps,
) => {
  const keys = [
    'name',
    'rules',
    'shouldUnregister',
    'defaultValue',
    'control',
    'transform',
  ] as const

  const result = Object.entries(props).reduce<{
    controllerProps: unknown
    [key: string]: unknown
  }>(
    (acc, [key, value]) => {
      if (keys.includes(key as (typeof keys)[number]) && isOfType.object(acc.controllerProps)) {
        acc.controllerProps[key] = value
      } else {
        acc[key as keyof typeof acc] = value
      }

      return acc
    },
    { controllerProps: {} },
  ) as {
    controllerProps: Pick<TProps, (typeof keys)[number]>
  } & Omit<TProps, (typeof keys)[number]>

  return result
}

export const handleSubmitWithErrors = <TValues extends FieldValues>(
  handleSubmit: UseFormHandleSubmit<TValues>,
  submit: (values: TValues) => Promise<void> | void,
) =>
  handleSubmit(submit, (errors: unknown) => {
    throw errors
  })
