import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  container: {
    maxWidth: 392,
    height: '100%',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: palette.primary[400],
    },
    '&:active': {
      backgroundColor: palette.primary[500],
    },
  },
}))
