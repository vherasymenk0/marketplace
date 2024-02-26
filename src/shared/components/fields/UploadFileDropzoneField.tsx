import { UseFormFieldProps, combineControllerProps, useFormField } from '~/shared/services/form'
import { FileValue } from '~/shared/services/uploadFile'

import { UploadFileDropzone, UploadFileDropzoneProps } from '../inputs/UploadFileDropzone'

export type UploadFileDndFieldProps = UseFormFieldProps<FileValue> &
  Omit<UploadFileDropzoneProps, 'value' | 'onChange'>

export const UploadFileDndField = ({ ...props }: UploadFileDndFieldProps) => {
  const { controllerProps, ...rest } = combineControllerProps(props)
  const {
    field: { value, onChange },
    error,
  } = useFormField<FileValue>(controllerProps)

  return (
    <UploadFileDropzone
      name={props.name}
      value={value}
      onChange={onChange}
      error={error}
      {...rest}
    />
  )
}
