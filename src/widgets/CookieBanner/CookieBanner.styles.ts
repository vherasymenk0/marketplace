import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  root: {
    position: 'fixed',
    left: '50vw',
    transform: 'translate(-50%, 0)',
    bottom: 16,
    p: 3,
    width: 'calc(100% - 32px)',
    maxWidth: 1016,
    minWidth: 358,
    backgroundColor: palette.grey[25],
    borderRadius: 1,
    border: `1px solid ${palette.grey[200]}`,
    zIndex: 1,
  },
  footer: {
    flexDirection: { xs: 'column', md: 'row' },
    mt: 2,
    gap: { xs: 1, md: 2 },
  },
}))
