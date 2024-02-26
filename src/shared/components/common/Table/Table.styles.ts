import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  container: {
    borderRadius: '8px',
    border: `1px solid ${palette.grey[200]}`,
  },
}))
