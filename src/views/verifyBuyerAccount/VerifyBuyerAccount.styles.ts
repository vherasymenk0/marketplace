import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  wrapper: {
    alignItems: { xs: 'center', md: 'flex-start' },
    maxWidth: '500px',
    width: '100%',
  },
  title: {
    color: palette.grey[900],
    mt: 3,
  },
  helperText: {
    mt: 2,
    color: palette.grey[600],
  },
  resend: {
    mt: { xs: 4, md: 5 },
    width: '100%',
  },
}))
