import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  inlineBtn: {
    color: palette.grey[25],

    '&:hover': {
      backgroundColor: 'transparent',
      color: 'inherit',

      '.MuiBadge-root': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      },
    },

    '&:active': {
      '.MuiBadge-root': {
        backgroundColor: palette.primary[800],
      },
    },

    '.MuiButton-startIcon': {
      margin: 0,
      'svg path': {
        fill: palette.grey[25],
      },
    },

    '.MuiTypography-root': {
      ml: 1,
      a: { color: palette.grey[25] },
    },
  },
  title: {
    display: { xs: 'none', md: 'block' },
  },
  badge: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: 32,
    height: 32,
    borderRadius: '4px',

    '.MuiBadge-dot': {
      width: 8,
      height: 8,
      background: 'linear-gradient(137deg, #166F86 15.49%, #488A9B 87.5%)',
    },
  },
}))
