import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  paper: {
    p: { xs: 3, lg: 4 },
  },
  fields: {
    gap: { xs: 2, lg: 3 },
  },
  wrapper: {
    flexDirection: { xs: 'column', lg: 'row' },
    gap: { xs: 2, lg: 3 },
  },
  divider: {
    my: 3,
    borderColor: palette.grey['200'],
  },
}))
