import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette, breakpoints }) => ({
  icon: {
    color: palette.primary.main,
  },
  title: {
    color: palette.grey[900],
    mt: 3,
  },
  subtitle: {
    color: palette.grey[600],
    mt: 2,
    mb: 3,

    [breakpoints.down('md')]: {
      mb: 4,
      textAlign: 'center',
    },
  },
}))
