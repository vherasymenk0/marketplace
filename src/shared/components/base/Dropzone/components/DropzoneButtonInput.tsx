import { Box } from '@mui/material'

import { useDropzoneContext } from '../Dropzone.context'
import { DropzoneInputProps } from '../Dropzone.types'

const hideInputStyles = { display: 'none', zIndex: -1 }

export const DropzoneButtonInput = ({
  children,
  rootProps,
  inputProps,
  dataTestId,
  sx,
  ...rest
}: DropzoneInputProps) => {
  const { getInputProps, getRootProps } = useDropzoneContext()
  const newRootProps = { ...getRootProps(), ...rootProps }
  const newInputProps = { ...getInputProps(), ...inputProps }

  return (
    <Box {...rest} sx={sx} {...newRootProps}>
      <input
        type="file"
        style={hideInputStyles}
        data-testid={dataTestId ?? 'dropzone-input'}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...newInputProps}
      />

      {children}
    </Box>
  )
}
