import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  link: {
    maxWidth: 'max-content',
    ml: 'auto',
  },
  helperText: {
    color: palette.grey[600],
    fontFamily: 'inherit',
    display: 'inline-block',
  },
}))
