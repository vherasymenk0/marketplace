import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  hamburger: {
    display: { xs: 'flex', md: 'none' },
    padding: '2px',
    'svg path': {
      stroke: palette.grey[25],
    },
  },
}))
