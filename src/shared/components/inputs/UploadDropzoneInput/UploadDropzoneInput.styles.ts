import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  title: {
    textAlign: 'center',
    color: palette.grey[900],
    mt: 2,
  },
  titleLast: {
    fontWeight: 500,
    color: palette.secondary.main,
  },
  link: {
    textDecoration: 'underline',
    fontSize: 'inherit',
    fontWeight: { md: '600' },
    whiteSpace: 'noWrap',
  },
  portal: {
    position: 'absolute',
    left: 16,
    top: 106,
    backgroundColor: palette.secondary[600],
    zIndex: 10,
    border: `4px dashed ${palette.secondary.main}`,
    borderRadius: 6,
    width: 'calc(58% - 32px)',
    height: 'calc(100vh - 192px - 32px)',
  },
  portalBody: { fontSize: 48, fontFamily: 'YoungAnyone', color: 'primary.p100' },
}))
