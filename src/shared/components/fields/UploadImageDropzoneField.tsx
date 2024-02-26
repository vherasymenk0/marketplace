import { UseFormFieldProps, combineControllerProps, useFormField } from '~/shared/services/form'
import { FileValue } from '~/shared/services/uploadFile'

import {
  UploadImageDndInput,
  UploadImageDndInputProps,
} from '../inputs/UploadImageDropzone/UploadImageDndInput'

export type UploadImageDndProps = UseFormFieldProps<FileValue> &
  Omit<UploadImageDndInputProps, 'value' | 'onChange'>

export const UploadImageDndField = ({ renderImage, ...props }: UploadImageDndProps) => {
  const { controllerProps, ...rest } = combineControllerProps(props)
  const {
    field: { value, onChange },
    error,
  } = useFormField<FileValue>(controllerProps)

  return (
    <UploadImageDndInput
      value={value}
      name={props.name}
      error={error}
      onChange={onChange}
      renderImage={renderImage}
      {...rest}
    />
  )
}
