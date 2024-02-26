import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

interface StyleProps {
  disabled?: boolean
}

export const useStyles = makeSxStyles(({ palette }, { disabled }: StyleProps) => ({
  checkedIcon: {
    color: disabled ? palette.secondary[500] : palette.secondary.main,
  },
  uncheckedIcon: {
    color: disabled ? palette.secondary[500] : palette.grey[500],
  },
  radio: {
    padding: 0,
  },
}))
