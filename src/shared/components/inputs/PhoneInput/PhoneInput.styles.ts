import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

interface Props {
  isEmpty: boolean
}

export const useStyles = makeSxStyles(({ palette }, { isEmpty }: Props) => ({
  root: {
    color: palette.grey[400],

    '&.Mui-focused': {
      color: palette.secondary.main,
    },

    ...(!isEmpty && {
      color: palette.secondary.main,
    }),

    '.MuiInputAdornment-root .MuiTypography-root': {
      fontSize: 18,
      color: palette.secondary.main,
    },
  },
}))
