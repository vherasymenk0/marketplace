import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette, typography }) => ({
  wrapper: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    mt: 3,
    color: palette.grey[900],
    textAlign: 'center',
  },
  subtitle: {
    color: palette.grey[600],
    mt: 2,
    letterSpacing: '0.1px',
    textAlign: 'center',
    px: 0.25,
  },
  contactBtn: {
    backgroundColor: 'transparent',
    verticalAlign: 'unset',
    color: palette.primary.main,
    ...typography.body3,
  },
  goHomeBtn: {
    mt: 4,
    width: { xs: '100%', md: '200px' },
    display: 'block',

    button: {
      width: 'inherit',
    },
  },
}))
