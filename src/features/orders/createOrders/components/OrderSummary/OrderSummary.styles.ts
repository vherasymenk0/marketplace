import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  root: {
    maxWidth: 392,
    width: '100%',
  },
  paper: {
    p: 3,
  },
  divider: {
    my: 3,
    borderColor: palette.grey['200'],
  },
  wrapper: {
    flexDirection: { xs: 'column', md: 'row' },
    gap: { xs: 2, md: 3 },
  },
}))
