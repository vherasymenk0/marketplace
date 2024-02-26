import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  loopIcon: {
    color: `${palette.grey[300]} !important`,
  },
  input: {
    fieldset: {
      borderColor: palette.grey[200],
    },
  },
}))
