import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  btn: {
    display: { xs: 'none', md: 'flex' },
    color: palette.grey[25],
    borderColor: palette.grey[25],
    height: '48px',
    a: { color: 'inherit' },
  },
}))
