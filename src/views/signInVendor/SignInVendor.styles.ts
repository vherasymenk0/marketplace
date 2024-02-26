import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  wrapper: {
    alignItems: { xs: 'center', md: 'flex-start' },
    width: '100%',
  },
  banner: {
    mt: 2,
    mb: { xs: 3, md: 4 },
    width: '100%',
  },
  title: {
    color: palette.grey[900],
  },
  subtitle: {
    color: palette.grey[600],
    mt: 3.5,
    mb: 5.5,
  },
}))
