import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

import { ButtonProps } from '../../base/Button'

interface StylesProps {
  sx?: ButtonProps['sx']
}

export const useStyles = makeSxStyles(({ palette }, { sx }: StylesProps) => ({
  root: {
    minWidth: 71,
    height: 32,
    border: 'none',
    color: palette.grey[600],
    p: 0,

    '&:hover, &:active': {
      backgroundColor: 'transparent',

      'svg path': {
        fill: palette.grey[600],
      },
    },

    '.MuiButton-startIcon': {
      mr: 0.5,
      ml: 0,
    },

    ...sx,
  },
}))
