'use client'

import { CodeInput, CodeInputProps } from '~/shared/components/inputs/CodeInput'
import { useFormField } from '~/shared/services/form'

import { TextFieldProps } from '../TextField'

type Props = TextFieldProps & CodeInputProps

export const CodeField = ({ name, ...restProps }: Props) => {
  const { field, error } = useFormField({ name })

  return <CodeInput {...field} error={!!error} {...restProps} />
}
