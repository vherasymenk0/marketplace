import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  wrapper: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-between',
    padding: { xs: '24px 16px', md: '40px 108px' },
    backgroundColor: palette.primary.dark,
  },
  logo: {
    width: { md: '180px' },
    mb: { xs: 4, md: 0 },
  },
  rightContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: { xs: 2, md: 7.75 },
  },
  copyright: {
    color: palette.grey[25],
  },
  title: {
    color: palette.grey[25],
    mb: { xs: 1.5, md: 3 },
  },
  mobileCopyright: {
    display: { xs: 'flex', md: 'none' },
    mt: 4,
  },
  item: {
    color: palette.grey[25],
    mb: 1,

    '&:last-child': {
      mb: 0,
    },

    a: {
      color: 'inherit',
    },
  },
  menu: {
    minWidth: { xs: '171px', lg: '217px' },
  },
}))
