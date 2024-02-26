import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  root: {
    flexDirection: 'row',
    gap: 1,
    alignItems: 'flex-start',
    width: '100%',
    borderRadius: 1,
    border: `1px solid ${palette.warning.main}`,
    backgroundColor: palette.warning.light,
    p: 2,
    mt: 2,
  },
}))
