import { FormHelperText, Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import UploadIcon from '~/shared/assets/icons/upload.svg'
import { Text } from '~/shared/components/base/Text'
import { humanFileSizeFormat } from '~/shared/services/uploadFile'

import { DropzoneInput, DropzoneProps, useDropzoneContext } from '../../base/Dropzone'
import { SvgIcon } from '../../base/SvgIcon'

import { useStyles } from './UploadDropzoneInput.styles'

export interface UploadDropzoneInputProps extends Required<Pick<DropzoneProps, 'maxSize'>> {
  isError?: boolean
  multiple?: boolean
  description?: string
  acceptedFormats?: string
  errorMessage?: string | null
  loadingMessage?: React.ReactNode
  accept?: DropzoneProps['accept']
  dataTestId?: string
}

export const UploadDropzoneInput = ({
  accept,
  description,
  acceptedFormats,
  maxSize,
  isError = false,
  multiple,
  errorMessage,
  loadingMessage,
  dataTestId,
}: UploadDropzoneInputProps) => {
  const { isUploading } = useDropzoneContext()
  const styles = useStyles()

  const formats =
    acceptedFormats ??
    Object.keys(accept ?? {})
      .map((key) => key.split('/')[1]?.toUpperCase())
      .join(', ')

  return (
    <Stack gap={1}>
      <DropzoneInput isError={isError} dataTestId={dataTestId}>
        <Stack justifyContent="center" alignItems="center">
          <SvgIcon icon={UploadIcon} />

          <Text variant="body4" sx={styles.title}>
            <FormattedMessage
              id="dragndrop.title.firstPart"
              defaultMessage="Drag & Drop Files or"
            />
            &nbsp;
            <Text variant="body4" sx={styles.titleLast} component="span">
              <FormattedMessage id="dragndrop.title.secondPart" defaultMessage="Browse" />
            </Text>
          </Text>

          <Text variant="body4" color="grey.600" textAlign="center" sx={{ mt: 2 }}>
            <FormattedMessage
              id="dragndrop.formats"
              defaultMessage="{formats} no more than {size} {multiple, select, true {each} other {}}"
              values={{
                formats,
                size: humanFileSizeFormat(maxSize),
                multiple,
              }}
            />
            <br />
            {description}
          </Text>
        </Stack>
      </DropzoneInput>
      {isUploading && loadingMessage ? (
        <Text variant="body4" color="info.main">
          {loadingMessage}
        </Text>
      ) : null}
      {errorMessage ? <FormHelperText error={!!errorMessage}>{errorMessage}</FormHelperText> : null}
    </Stack>
  )
}
