import { UseFormFieldProps, combineControllerProps, useFormField } from '~/shared/services/form'
import { FileValue } from '~/shared/services/uploadFile'

import { UploadFileButtonInput, UploadFileButtonInputProps } from '../inputs/UploadFileButton'

export type UploadFileButtonFieldProps = UseFormFieldProps<FileValue> &
  Omit<UploadFileButtonInputProps, 'value' | 'onChange' | 'multiple'>

export const UploadFileButtonField = ({ title, ...props }: UploadFileButtonFieldProps) => {
  const { controllerProps, ...rest } = combineControllerProps(props)
  const {
    field: { value, onChange },
    error,
  } = useFormField<FileValue>(controllerProps)

  return (
    <UploadFileButtonInput
      title={title}
      value={value}
      onChange={onChange}
      error={error}
      {...rest}
    />
  )
}
