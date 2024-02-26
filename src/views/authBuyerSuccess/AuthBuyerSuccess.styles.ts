import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ breakpoints, palette }) => ({
  pageContainer: {
    [breakpoints.down('md')]: {
      alignItems: 'center',

      '.MuiFormHelperText-root': {
        textAlign: 'center',
      },

      '.next-link, .next-link > .MuiButtonBase-root': {
        width: '100%',
      },
    },
  },
  title: {
    mt: 3,
    color: palette.grey[900],
  },
  subtitle: {
    color: palette.grey[600],
    mt: 2,
    letterSpacing: '0.1px',
    textAlign: { xs: 'center', md: 'left' },
  },
}))
