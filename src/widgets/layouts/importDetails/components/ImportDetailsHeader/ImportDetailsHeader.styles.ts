import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(() => ({
  backBtn: {
    width: 'max-content',
  },
  wrapper: {
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: { xs: 'center', md: 'space-between' },
    alignItems: { xs: 'flex-start', md: 'center' },
    mt: 3,
    mb: 4,
    gap: 2,
  },
  actionBtn: {
    minWidth: { xs: '100%', md: 184 },
  },
}))
