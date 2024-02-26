import { SxProps, Theme } from '@mui/material'

import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

interface StyleProps {
  sx?: SxProps<Theme>
}

export const useStyles = makeSxStyles((theme, { sx }: StyleProps) => ({
  select: {
    '&.MuiFormLabel-root': {
      color: 'red !important',
    },
    '& .MuiSelect-icon': {
      top: 'auto',
      right: '16px',
    },
    '& .Mui-disabled.MuiSelect-icon': {
      path: {
        fill: theme.palette.secondary[500],
      },
    },
    ...sx,
  },
  search: {
    '& .MuiInputBase-input': {
      padding: '12px 16px',
    },
  },
}))

export const useMenuListStyles = makeSxStyles(({ palette }) => ({
  multipleMenuItem: {
    '.MuiCheckbox-root': {
      'svg > path': {
        fill: palette.secondary.main,
      },
    },
  },
}))
