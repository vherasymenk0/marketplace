import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

interface Props {
  variant: 'primary' | 'info' | 'success' | 'error'
}

export const useStyles = makeSxStyles(({ palette }, { variant }: Props) => ({
  label: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'max-content',
    px: 2,
    py: 1,
    borderRadius: 2,
    height: '32px',

    ...(variant === 'primary' && {
      color: palette.primary.main,
      backgroundColor: palette.primary[500],
    }),

    ...(variant === 'success' && {
      color: palette.success.dark,
      backgroundColor: palette.success.light,
    }),

    ...(variant === 'info' && {
      color: palette.info.main,
      backgroundColor: palette.info.light,
    }),

    ...(variant === 'error' && {
      color: palette.error.main,
      backgroundColor: palette.error.medium,
    }),
  },
}))
