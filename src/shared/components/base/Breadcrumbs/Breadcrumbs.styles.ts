import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette, typography }) => ({
  root: {
    '.MuiBreadcrumbs-ol': {
      alignItems: 'flex-end',
    },

    '& .MuiBreadcrumbs-separator': {
      color: palette.grey[600],
      mr: 0.5,
      ml: 0.5,
      ...typography.body4,
    },
  },
}))
