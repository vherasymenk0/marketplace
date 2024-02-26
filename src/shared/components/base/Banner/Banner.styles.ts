import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  root: {
    alignItems: 'center',
    width: '100%',
    padding: 1,
    background: `linear-gradient(90deg, ${palette.common.black} 0%, ${palette.primary.main} 100%)`,
    color: palette.common.white,
  },
}))
