import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(() => ({
  root: {
    padding: 0,

    '&.MuiButton-sizeLarge': {
      minWidth: 56,
      maxWidth: 56,
      height: 56,

      '& svg': {
        width: 24,
        height: 24,
      },
    },
    '&.MuiButton-sizeMedium': {
      minWidth: 48,
      maxWidth: 48,
      height: 48,

      '& svg': {
        width: 24,
        height: 24,
      },
    },
    '&.MuiButton-sizeSmall': {
      minWidth: 32,
      maxWidth: 32,
      height: 32,

      '& svg': {
        width: 18,
        height: 18,
      },
    },
    '& .MuiButton-startIcon': {
      margin: '0 auto',
    },
  },
}))
