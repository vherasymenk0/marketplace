import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  container: {
    borderRadius: 1,
    border: `1px solid ${palette.grey[200]}`,
    p: 3,
  },
  listDot: {
    mx: 1.25,
    width: 4,
    height: 4,
    borderRadius: '50%',
    bgcolor: palette.grey[600],
  },
}))
