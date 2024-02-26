import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  container: {
    borderRadius: '8px',
    border: `1px solid ${palette.grey[200]}`,
    boxShadow: '0px 6px 8px -3px rgba(51, 71, 255, 0.20)',
    py: 6,
    px: { xs: 3, md: 10 },
    mt: 5,
    maxWidth: 600,
    textAlign: 'center',
    alignSelf: 'center',
  },
}))
