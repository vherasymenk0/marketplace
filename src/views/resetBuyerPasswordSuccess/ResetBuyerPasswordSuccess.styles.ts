import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette, breakpoints }) => ({
  pageContainer: {
    [breakpoints.down('md')]: {
      alignItems: 'center',
    },
  },
  title: {
    mt: 3,
    color: palette.grey[900],
  },
  description: {
    mt: 2,
    color: palette.grey[600],

    [breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  signInBtn: {
    mt: 4,
    width: { xs: '100%', md: 200 },
  },
}))
