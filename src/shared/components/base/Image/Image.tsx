import { Box, BoxProps } from '@mui/material'

export type ImageProps = BoxProps<'img'>

export const Image = ({ alt, src, ...props }: ImageProps) => {
  return <Box component="img" alt={alt} src={src} {...props} />
}
