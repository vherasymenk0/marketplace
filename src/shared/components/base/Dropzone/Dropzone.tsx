import { DropzoneOptions as ReactDropzoneProps, useDropzone } from 'react-dropzone'

import { type UseUploadFile, useUploadFile } from '~/shared/services/uploadFile'

import { DropzoneContextProvider } from './Dropzone.context'
import { OnValidateErrorType } from './Dropzone.types'
import { dropzoneValidator } from './Dropzone.validation'

interface DropzoneCustomProps {
  multiple?: boolean
  disabled?: boolean
  onValidateError: OnValidateErrorType
  children: React.ReactNode
}

export type DropzoneProps = UseUploadFile<unknown> &
  Omit<ReactDropzoneProps, 'onError' | 'validator'> &
  DropzoneCustomProps & {
    validator?: (file: File, onValidateError: OnValidateErrorType) => void
  }

export const Dropzone = ({
  value,
  children,
  disabled,
  maxFiles = 0,
  multiple = false,
  maxSize,
  onError,
  onChange,
  onUpload,
  accept,
  onSuccess,
  deleteFileOnError,
  onValidateError,
  validator,
  ...props
}: DropzoneProps) => {
  const { files, deleteFile, uploadFiles, changeFilePosition, isUploading } = useUploadFile({
    value,
    multiple,
    maxFiles,
    onUpload,
    onChange,
    ...(onError && onError),
    ...(onSuccess && onSuccess),
    deleteFileOnError,
  })

  const handleValidate = (file: File) => {
    dropzoneValidator({ file, maxSize, accept, validator, onValidateError })

    return null
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple,
    maxSize,
    validator: handleValidate,
    maxFiles,
    disabled: disabled ?? isUploading,
    onDrop: (acceptedFiles) => {
      const actualFiles = [...acceptedFiles.map((file) => ({ file }))]

      uploadFiles(actualFiles).catch((uploadError) => {
        console.error(uploadError)
      })
    },
    accept,
    ...props,
  })

  return (
    <DropzoneContextProvider
      value={{
        value: files,
        isDisabled: disabled ?? isUploading,
        isUploading,
        multiple,
        deleteFile,
        changeFilePosition,
        getInputProps,
        getRootProps,
        ...(onError && onError),
        isDragActive,
      }}
    >
      {children}
    </DropzoneContextProvider>
  )
}
