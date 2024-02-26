import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ breakpoints, palette }) => ({
  container: {
    width: '100%',
    alignItems: { xs: 'center', md: 'flex-start' },
  },
  title: {
    color: palette.grey[900],
    mt: 3,
    mb: 3,

    [breakpoints.down('md')]: {
      mb: 4,
    },
  },
}))
