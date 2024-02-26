import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ breakpoints, typography, palette }) => ({
  icon: {
    [breakpoints.up('md')]: {
      display: 'none',
    },
  },
  paper: {
    width: '100%',
    overflowY: 'auto',
  },
  header: {
    py: 2,
  },
  logout: {
    '&.MuiButtonBase-root.MuiButton-root.MuiLoadingButton-root .MuiButton-startIcon': {
      margin: '0 12px 0 0',
    },
    padding: '32px 0 32px 22px',
    justifyContent: 'flex-start',
    ...typography.subtitle4,

    'svg path': {
      fill: palette.primary.main,
    },
  },
  catalogBtn: {
    order: 2,
  },
  currency: {
    margin: '26px 8px',
  },
}))
