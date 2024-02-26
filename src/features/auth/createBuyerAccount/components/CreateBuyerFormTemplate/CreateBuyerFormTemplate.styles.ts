import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  allFieldsStack: {
    rowGap: 2,
  },
  helperText: {
    color: palette.grey[600],
    mt: 0.5,
    fontFamily: 'inherit',
  },
  agreeText: {
    mt: 2,
    letterSpacing: '0.1px',
    a: {
      color: palette.primary.main,
    },
  },
}))
