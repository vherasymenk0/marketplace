import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  container: {
    width: '100%',
    backgroundColor: palette.primary[400],
    borderRadius: 1,
    border: '1px solid',
    borderColor: palette.primary[600],
    p: 2,
    a: {
      color: palette.primary.main,
    },
  },
}))
