import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  submitButton: {
    mt: {
      xs: 3,
      md: 4,
    },
  },
  text: {
    display: 'block',
    textAlign: {
      xs: 'center',
      md: 'left',
    },
    mt: {
      xs: 2,
      md: 3,
    },
    color: palette.grey[600],
    a: {
      color: palette.primary.main,
    },
  },
}))
