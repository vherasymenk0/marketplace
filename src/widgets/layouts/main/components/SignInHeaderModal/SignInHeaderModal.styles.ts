import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  paper: {
    alignItems: 'center',
    py: 5,
    px: { xs: 3, md: 9 },
    minWidth: 'fit-content',
    width: '100%',
  },
  text: {
    mt: 3,
    color: palette.grey[900],
  },
  buttons: {
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-between',
    gap: { xs: 2, md: 3 },
    mt: 3,
    width: '100%',

    a: {
      py: 2,
      px: 4.5,
      minWidth: 'max-content',
      'svg path': {
        fill: 'transparent',
        stroke: palette.grey[25],
      },
    },
  },
}))
