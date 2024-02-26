import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  container: {
    width: '100%',
    border: '1px solid',
    borderColor: palette.grey[200],
    borderRadius: 1,
    p: 3,
  },
}))
