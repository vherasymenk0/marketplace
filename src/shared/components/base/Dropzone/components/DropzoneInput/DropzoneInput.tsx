import { Box } from '@mui/material'

import { useDropzoneContext } from '../../Dropzone.context'
import { DropzoneInputProps } from '../../Dropzone.types'

import { useStyles } from './DropzoneInput.styles'

export const DropzoneInput = ({
  children,
  rootProps,
  inputProps,
  dataTestId,
  sx,
  ...rest
}: DropzoneInputProps) => {
  const { isDragActive = false, getInputProps, getRootProps } = useDropzoneContext()
  const newRootProps = { ...getRootProps(), ...rootProps }
  const newInputProps = { ...getInputProps(), ...inputProps }
  const styles = useStyles({ isDragActive })

  return (
    <Box
      {...rest}
      sx={{
        ...styles.inputWrapper,
        ...sx,
      }}
      {...newRootProps}
    >
      <input
        type="file"
        data-testid={dataTestId ?? 'dropzone-input'}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...newInputProps}
      />

      {children}
    </Box>
  )
}
