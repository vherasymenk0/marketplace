import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette, breakpoints }) => ({
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
  resendLink: {
    color: palette.grey[600],
    mt: 4,

    button: {
      ml: 1,
    },
  },
}))
