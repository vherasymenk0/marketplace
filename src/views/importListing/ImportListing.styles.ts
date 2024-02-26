import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  wrapper: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    mt: { xs: 2, md: 0 },
    mb: { xs: 2, md: 0 },
  },
  content: {
    py: { xs: 4, md: 5 },
    px: { xs: 3, md: 6 },
    alignItems: 'center',
    maxWidth: { xs: '358px', md: '600px' },
    width: '100%',
    boxShadow: '0px 6px 8px -3px rgba(51, 71, 255, 0.20)',
    borderRadius: 1,
    border: `1px solid ${palette.grey[200]}`,
  },
  title: {
    mb: 3,
    color: palette.grey[900],
    textAlign: 'center',
  },
}))
