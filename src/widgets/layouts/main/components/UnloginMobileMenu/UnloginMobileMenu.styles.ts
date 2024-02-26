import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: palette.primary.main,
    color: palette.grey[25],
    padding: '16px 16px 16px 24px',
    mt: 1,
    '&:hover': {
      backgroundColor: palette.primary.main,
      color: palette.grey[25],
    },
  },
  cart: { order: 2 },
  signin: { order: 3 },
  signup: { order: 0 },
}))
