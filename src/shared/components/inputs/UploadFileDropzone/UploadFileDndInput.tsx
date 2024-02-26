import { Stack } from '@mui/material'

import { FormControl, FormControlProps } from '~/shared/components/base/FormControl'
import useDropzoneError from '~/shared/hooks/useDropzoneError'
import { FileValue } from '~/shared/services/uploadFile'

import { Dropzone, DropzoneProps } from '../../base/Dropzone'
import { UploadFileList, UploadFileListProps } from '../../common/UploadFileList'
import { UploadDropzoneInput, UploadDropzoneInputProps } from '../UploadDropzoneInput'

export type UploadFileDropzoneProps = Omit<
  DropzoneProps,
  'value' | 'onChange' | 'onValidateError' | 'children'
> &
  Pick<FormControlProps, 'label' | 'fullWidth' | 'helperText' | 'required'> &
  Pick<UploadFileListProps, 'columns' | 'isDnd' | 'spacing'> &
  Partial<Pick<UploadDropzoneInputProps, 'description'>> & {
    formControlProps?: FormControlProps
  } & {
    error?: string | null
    loadingMessage?: React.ReactNode
    name: string
    value: FileValue
    onChange: (value: FileValue) => void
  }

const FILE_ACCEPT: DropzoneProps['accept'] = {
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
}

export const UploadFileDropzone = ({
  label,
  value,
  error,
  loadingMessage,
  helperText,
  spacing = 1,
  isDnd = false,
  multiple = false,
  required = false,
  formControlProps,
  accept = FILE_ACCEPT,
  maxFiles = 5,
  maxSize = 1024 * 1024 * 50,
  description = '',
  onChange,
  ...props
}: UploadFileDropzoneProps) => {
  const { handleSetError, onDropError, isError, errorMessage } = useDropzoneError(error)

  return (
    <Dropzone
      accept={accept}
      {...props}
      value={value}
      maxSize={maxSize}
      maxFiles={maxFiles}
      multiple={multiple}
      onError={onDropError}
      onValidateError={handleSetError}
      onChange={onChange}
    >
      <FormControl
        fullWidth
        label={label}
        required={required}
        helperText={helperText}
        {...formControlProps}
      >
        <Stack gap={2} direction="column-reverse">
          <UploadFileList spacing={spacing} isDnd={isDnd} />

          <UploadDropzoneInput
            isError={isError}
            loadingMessage={loadingMessage}
            errorMessage={errorMessage}
            accept={accept}
            acceptedFormats="XLSX"
            multiple={multiple}
            maxSize={maxSize}
            description={description}
          />
        </Stack>
      </FormControl>
    </Dropzone>
  )
}
