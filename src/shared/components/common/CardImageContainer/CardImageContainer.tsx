import { Box, BoxProps } from '@mui/material'

export const CardImageContainer = ({
  children,
  height = '100%',
  width = '100%',
  ...rest
}: BoxProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 1,
        overflow: 'hidden',
      }}
      height={height}
      width={width}
      {...rest}
    >
      {children}
    </Box>
  )
}
