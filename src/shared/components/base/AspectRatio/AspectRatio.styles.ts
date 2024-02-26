import { BoxProps } from '@mui/material'

import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

interface StylesProps {
  ratio?: number
  sx?: BoxProps['sx']
}

export const useStyles = makeSxStyles((_, { sx, ratio = 1 }: StylesProps) => ({
  root: {
    '&': {
      paddingTop: `calc((1 / ${ratio}) * 100%)`,

      '@supports (aspect-ratio: 1)': {
        aspectRatio: `${ratio}`,
        paddingTop: 'initial',
      },
    },
    ...sx,
  },
}))
