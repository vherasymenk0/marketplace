import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  text: {
    width: '100%',
    textAlign: { xs: 'center', md: 'left' },
    mt: { xs: 2, md: 3 },
    color: palette.grey[600],
    a: {
      color: palette.primary.main,
    },
  },
}))
