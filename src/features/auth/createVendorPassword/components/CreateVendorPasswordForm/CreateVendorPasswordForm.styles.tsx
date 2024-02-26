import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ breakpoints }) => ({
  container: {
    width: '100%',
  },

  submitBtn: {
    mt: 3,

    [breakpoints.down('md')]: {
      mt: 4,
    },
  },
}))
