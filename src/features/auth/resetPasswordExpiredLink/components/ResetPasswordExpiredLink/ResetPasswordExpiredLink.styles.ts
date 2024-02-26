import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ breakpoints }) => ({
  pageContainer: {
    [breakpoints.down('md')]: {
      alignItems: 'center',
      textAlign: 'center',
    },
  },
}))
