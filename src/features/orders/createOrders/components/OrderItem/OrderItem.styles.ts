import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  wrapper: {
    flexDirection: 'row',
    gap: { xs: 2, md: 1.5 },

    '.MuiTypography-root': {
      wordBreak: 'break-word',
    },
  },
  divider: {
    my: 3,
    borderColor: palette.grey['200'],
  },
  leftContent: {
    gap: 0.5,
    maxWidth: { xs: 'unset', md: 376 },
    width: 'fit-content',
  },
  rightContent: {
    display: { xs: 'none', md: 'flex' },
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  desktopLink: {
    display: { xs: 'none', md: 'block' },
    maxWidth: 'max-content',
  },
  mobileLink: {
    display: { xs: 'block', md: 'none' },
    maxWidth: 'max-content',
  },
}))
