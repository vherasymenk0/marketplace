import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: palette.primary[400],
    borderRadius: 1,
    border: `1px solid ${palette.primary[600]}`,
    gap: 2,
    mt: 2,
    px: 2,
    pt: 2,
    pb: 1.5,
  },
}))
