import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(() => ({
  wrapper: {
    alignItems: { xs: 'center', md: 'flex-start' },
    width: '100%',
  },
  button: { ml: 1 },
}))
