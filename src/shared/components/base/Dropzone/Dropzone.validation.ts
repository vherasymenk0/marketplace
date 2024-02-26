import { DropzoneOptions } from 'react-dropzone'

import { humanFileSizeFormat } from '~/shared/services/uploadFile'

import { OnValidateErrorType } from './Dropzone.types'

type DropzoneValidationArgs = Pick<DropzoneOptions, 'maxSize' | 'accept'> & {
  file: File
  onValidateError: OnValidateErrorType
  validator?: (file: File, onValidateError: OnValidateErrorType) => void
}

export const dropzoneValidator = ({
  file,
  maxSize,
  accept,
  onValidateError,
  validator,
}: DropzoneValidationArgs) => {
  const { type, name, size } = file
  const validTypes = accept ? Object.keys(accept) : []

  if (!validTypes.includes(type)) {
    onValidateError?.(`${name} isn’t a valid format`)
    return
  }

  if (maxSize && maxSize < size) {
    const maxFileSize = humanFileSizeFormat(maxSize)
    onValidateError?.(`${name} file size can’t exceed ${maxFileSize}`)
    return
  }

  validator?.(file, onValidateError)

  onValidateError(null)
}
