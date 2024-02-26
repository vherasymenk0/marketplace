import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ breakpoints }) => ({
  icon: {
    [breakpoints.up('md')]: {
      display: 'none',
    },
  },
  paper: {
    width: '100%',
    overflowY: 'auto',
  },
  header: {
    py: 2,
  },
}))
