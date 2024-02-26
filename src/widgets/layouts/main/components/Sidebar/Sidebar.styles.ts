import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(() => ({
  paper: {
    position: 'relative',
    width: '100%',
  },
  drawer: {
    display: { xs: 'flex', md: 'none' },
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    py: 2,
  },
}))
