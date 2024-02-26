import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(() => ({
  container: {
    position: 'relative',
    py: { xs: 4, md: 11 },
    px: { xs: 2, md: 13 },
    height: { xs: 400, md: 'auto' },
  },
  content: {
    background: `linear-gradient(137.49deg, #166F86 15.49%, #488A9B 87.5%)`,
    px: 2,
    py: 0.5,
    borderRadius: 2,
    height: 'fit-content',
  },
}))
