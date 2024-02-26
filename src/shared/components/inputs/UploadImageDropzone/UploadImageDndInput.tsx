import { Stack } from '@mui/material'
import { ReactNode } from 'react'

import { FormControl, FormControlProps } from '~/shared/components/base/FormControl'
import useDropzoneError from '~/shared/hooks/useDropzoneError'
import { FileValue } from '~/shared/services/uploadFile'

import { Dropzone, DropzoneProps } from '../../base/Dropzone'
import { UploadImageList, UploadImageListProps } from '../../common/UploadImageList'
import { UploadDropzoneInput, UploadDropzoneInputProps } from '../UploadDropzoneInput'

export type UploadImageDndInputProps = Omit<
  DropzoneProps,
  'value' | 'onChange' | 'onValidateError' | 'children'
> &
  Pick<FormControlProps, 'label' | 'fullWidth' | 'helperText' | 'required'> &
  Pick<UploadImageListProps, 'isDnd' | 'spacing'> &
  Partial<Pick<UploadDropzoneInputProps, 'description'>> & {
    formControlProps?: FormControlProps
  } & {
    name: string
    value: FileValue
    error?: string | null | undefined
    dataTestId?: string
    onChange: (value: FileValue) => void | undefined
    renderImage?: (src: string, alt: string) => ReactNode
  }

const IMAGE_ACCEPT: DropzoneProps['accept'] = {
  'image/jpeg': ['.jpeg', '.jpg'],
  'image/png': ['.png'],
  'image/heic': ['.heic'],
}

const MAX_SIZE = 1024 * 1024 * 10

export const UploadImageDndInput = ({
  label,
  value,
  error,
  helperText,
  spacing = 2,
  isDnd = false,
  multiple = false,
  required = false,
  formControlProps,
  fullWidth: _,
  description = '',
  dataTestId,
  onChange,
  renderImage,
  ...props
}: UploadImageDndInputProps) => {
  const { handleSetError, onDropError, isError, errorMessage } = useDropzoneError(error)

  return (
    <Dropzone
      {...props}
      value={value}
      multiple={multiple}
      onChange={onChange}
      onError={onDropError}
      onValidateError={handleSetError}
      accept={IMAGE_ACCEPT}
      maxSize={MAX_SIZE}
    >
      <FormControl
        fullWidth
        label={label}
        helperText={helperText}
        required={required}
        {...formControlProps}
      >
        <Stack gap={{ xs: 2, md: 3 }}>
          <UploadDropzoneInput
            isError={isError}
            errorMessage={errorMessage}
            accept={IMAGE_ACCEPT}
            maxSize={MAX_SIZE}
            description={description}
            dataTestId={dataTestId}
          />

          <UploadImageList renderImage={renderImage} spacing={spacing} isDnd={isDnd} />
        </Stack>
      </FormControl>
    </Dropzone>
  )
}
