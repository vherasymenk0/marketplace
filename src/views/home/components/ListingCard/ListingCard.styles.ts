import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  container: {
    height: { xs: '100%', md: 'auto' },
    width: { xs: '100%', md: 288 },
    minWidth: { xs: 'calc(100vw - 32px);', md: 0 },
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: palette.primary[400],
    },
    '&:active': {
      backgroundColor: palette.primary[500],
    },
  },
}))
