import { Stack } from '@mui/material'
import { useEffect, useState } from 'react'

import { FormControl, FormControlProps } from '~/shared/components/base/FormControl'
import { FileValue } from '~/shared/services/uploadFile'

import { Dropzone, DropzoneProps } from '../../base/Dropzone'
import { UploadFileList, UploadFileListProps } from '../../common/UploadFileList'

import { UploadDropzoneButton, UploadDropzoneButtonProps } from './UploadDropzoneButton'

export type UploadFileButtonInputProps = Omit<DropzoneProps, 'value' | 'onChange' | 'children'> &
  Pick<FormControlProps, 'label' | 'fullWidth' | 'helperText' | 'required'> &
  Pick<UploadFileListProps, 'columns' | 'isDnd' | 'spacing'> &
  UploadDropzoneButtonProps & {
    formControlProps?: FormControlProps
  } & {
    error?: string | null
    value: FileValue | null
    onChange: (value: FileValue | null) => void
  }

const IMAGE_ACCEPT = {
  'image/jpeg': [],
  'image/png': [],
  'image/heif': [],
  'image/heic': [],
  'image/hevc': [],
}

export const UploadFileButtonInput = ({
  label,
  value,
  title,
  error,
  helperText,
  columns = 1,
  spacing = 1,
  isDnd = false,
  multiple = false,
  required = false,
  formControlProps,
  accept = IMAGE_ACCEPT,
  maxFiles = 5,
  maxSize = 1024 * 1024 * 5,
  onChange,
  ...props
}: UploadFileButtonInputProps) => {
  const [dropError, setDropError] = useState<string>()

  const onError = (err?: string) => setDropError(err)

  useEffect(() => {
    if (error) {
      setDropError(undefined)
    }
  }, [error])

  const isError = !!error || !!dropError

  return (
    <Dropzone
      accept={accept}
      {...props}
      value={value}
      maxSize={maxSize}
      maxFiles={maxFiles}
      multiple={multiple}
      onChange={onChange}
      onError={onError}
    >
      <FormControl
        fullWidth
        label={label}
        error={isError}
        errorMessage={dropError ?? error}
        required={required}
        helperText={helperText}
        {...formControlProps}
      >
        <Stack gap={2} direction="column-reverse">
          <UploadFileList columns={columns} spacing={spacing} isDnd={isDnd} isError={isError} />

          <UploadDropzoneButton title={title} />
        </Stack>
      </FormControl>
    </Dropzone>
  )
}
