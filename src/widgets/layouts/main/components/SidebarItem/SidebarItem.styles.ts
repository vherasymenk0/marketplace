import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  link: {
    margin: '0 !important',
  },
  root: {
    margin: '0 !important',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 16px',
    backgroundColor: 'transparent !important',
    color: palette.grey[900],

    '.MuiBox-root + .MuiTypography-root': {
      ml: 1,
    },

    '&.MuiButtonBase-root.MuiMenuItem-root > .MuiBox-root svg path': {
      fill: palette.secondary.main,
    },
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    mr: 1,

    '.MuiBadge-dot': {
      width: 8,
      height: 8,
      background: 'linear-gradient(137deg, #166F86 15.49%, #488A9B 87.5%)',
    },
  },

  startIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.primary[500],
    borderRadius: '4px',
    width: 32,
    height: 32,

    'svg path': {
      fill: palette.primary.main,
    },
  },
}))
