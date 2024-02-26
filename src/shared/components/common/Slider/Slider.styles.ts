import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  container: {
    width: 'calc(100% + 32px)',
    mx: -2,
  },
  slide: {
    minWidth: 'fit-content',
    px: 2,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 2,
    mt: 2,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: '50%',
    padding: 0,
    backgroundColor: palette.primary[500],

    '&.active': {
      backgroundColor: palette.primary.main,
    },
  },
}))
