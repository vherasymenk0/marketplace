import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  paper: {
    position: 'relative',
    px: { xs: 3, md: 13 },
    pt: 5,
    pb: { xs: 5, md: 6 },
    maxWidth: { xs: '100%', md: 600 },
    width: '100%',
  },
  closeIcon: {
    position: 'absolute',
    top: { xs: 16, md: 24 },
    right: { xs: 16, md: 24 },

    path: {
      fill: palette.grey[900],
    },
  },
  title: {
    textAlign: 'center',
    color: palette.grey[900],
  },
  text: {
    mt: 2,
    textAlign: 'center',
    color: palette.grey[600],
  },
  formWrapper: {
    mt: { xs: 3, md: 4 },

    form: {
      '.MuiStack-root:first-child': {
        gap: 2,
      },

      '.MuiStack-root:last-child .MuiTypography-root': {
        textAlign: 'center',
      },
    },
  },
}))
