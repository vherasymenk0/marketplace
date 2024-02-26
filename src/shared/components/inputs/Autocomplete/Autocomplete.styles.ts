import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useMenuListStyles = makeSxStyles(({ palette }) => ({
  multipleMenuItem: {
    '.MuiCheckbox-root.Mui-checked': {
      'svg > path': {
        fill: palette.secondary.main,
      },
    },
  },
}))
