import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ breakpoints }) => ({
  container: {
    alignItems: { xs: 'center', md: 'flex-start' },

    [breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
}))
