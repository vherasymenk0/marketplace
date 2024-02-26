import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

interface Props {
  color: 'light' | 'dark'
}
export const useStyles = makeSxStyles(({ palette, typography }, { color }: Props) => {
  const currentColor = color === 'light' ? palette.grey[25] : palette.grey[900]

  return {
    wrapper: {
      width: { xs: '100%', md: 160 },
      height: 24,
      minHeight: 24,
      '& > .MuiFormControl-root, .MuiInputBase-root': {
        height: 'inherit',
        minHeight: 'inherit',
      },
    },
    select: {
      '.MuiOutlinedInput-notchedOutline': {
        borderWidth: '0 !important',
        width: { md: 65 },
      },
      '.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input': {
        padding: 0,
        width: { md: 65 },
        height: 'inherit',
        minHeight: 'inherit',

        '.MuiTypography-root': {
          color: currentColor,
          ...typography.subtitle4,
        },
      },
      '.MuiSelect-iconOutlined': {
        right: { md: 100 },
        path: {
          fill: currentColor,
        },
      },
    },
    paper: { minWidth: { md: 160 } },
  }
})
