import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(() => ({
  root: {
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-between',
  },
  leftContent: {
    alignItems: 'flex-end',
    mt: { xs: 3, md: 0 },
  },
}))
