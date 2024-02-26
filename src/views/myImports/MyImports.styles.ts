import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(() => ({
  root: {
    mt: { xs: 5, md: 8 },
    mb: { xs: 12, md: 14 },
  },
  main: {
    mt: { xs: 2, md: 4 },
  },
}))
