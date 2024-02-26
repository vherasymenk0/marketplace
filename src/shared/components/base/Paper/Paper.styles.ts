import { SxProps } from '@mui/material'

import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

interface Props {
  sx?: SxProps
}

export const useStyles = makeSxStyles(({ palette }, { sx }: Props) => ({
  paper: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    maxWidth: { xs: '358px', md: '610px' },
    px: { xs: 3, md: 10 },
    py: { xs: 5, md: 6 },
    textAlign: 'center',
    backgroundColor: palette.grey[25],
    boxShadow: '0px 6px 8px -3px rgba(51, 71, 255, 0.20)',
    borderRadius: 1,
    border: `1px solid ${palette.grey[200]}`,
    ...(sx && { ...sx }),
  },
}))
