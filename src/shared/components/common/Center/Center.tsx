import { Box } from '@mui/material'

interface Props {
  children: JSX.Element
}

export const Center = ({ children }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      {children}
    </Box>
  )
}
