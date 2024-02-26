import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(() => ({
  root: {
    flexDirection: { xs: 'column-reverse', md: 'row' },
    gap: { xs: 2, md: 3 },
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    borderRadius: 1,
    overflow: 'hidden',
    cursor: 'pointer',
  },
  restImagesCount: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    opacity: 0.6,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
}))
