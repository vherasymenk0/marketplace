import { Box } from '@mui/material'

interface Props {
  children: React.ReactNode
}

export const BannerTemplate = ({ children }: Props) => {
  return (
    <Box
      sx={({ palette }) => ({
        background: `linear-gradient(93.44deg, ${palette.primary.dark} 1.04%, ${palette.primary.main} 100%)`,
        borderRadius: { xs: 0, md: 1 },
        mx: { xs: '-16px', md: 0 },
        mt: 10,
        overflow: 'hidden',
      })}
    >
      {children}
    </Box>
  )
}
