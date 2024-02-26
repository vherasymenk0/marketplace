import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  submitButton: {
    mt: {
      xs: 3,
      md: 4,
    },
    alignItems: { xs: 'center', md: 'flex-start' },
  },
  customerLink: {
    color: palette.grey[600],
    mt: {
      xs: 2,
      md: 3,
    },

    a: {
      color: palette.primary.main,
    },
  },
}))
