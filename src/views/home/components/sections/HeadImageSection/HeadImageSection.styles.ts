import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(() => ({
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: { xs: 'flex-end', md: 'center' },
    justifyContent: 'center',
    height: { xs: 484, md: 480 },
    borderRadius: 1,
    overflow: 'hidden',
    pb: 4,
    px: 3,
  },
}))
