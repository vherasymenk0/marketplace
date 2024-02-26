import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(() => ({
  wrapper: {
    mt: { xs: 2, md: 0 },
    flexDirection: { xs: 'column', md: 'row' },
    gap: { xs: 1, md: 3 },
  },
  importBtn: {
    order: 1,
  },
}))
