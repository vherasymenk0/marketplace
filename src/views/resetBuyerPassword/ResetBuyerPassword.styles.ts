import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ breakpoints, palette }) => ({
  container: {
    width: '100%',
    alignItems: { xs: 'center', md: 'flex-start' },
  },
  title: {
    color: palette.grey[900],
    mt: 3,
  },
  subtitle: {
    color: palette.grey[600],
    mt: 2,

    [breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
}))
