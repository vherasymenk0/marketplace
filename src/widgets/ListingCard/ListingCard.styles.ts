import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

interface Props {
  isActive: boolean
}

export const useStyles = makeSxStyles(({ palette }, { isActive }: Props) => ({
  container: {
    ...(isActive && {
      cursor: 'pointer',

      '&:hover': {
        backgroundColor: palette.primary[400],
      },
      '&:active': {
        backgroundColor: palette.primary[500],
      },
    }),
  },
  content: {
    maxWidth: { xs: '100%', md: 600 },
  },
  label: {
    mb: 0.5,
    display: 'block',
  },
  actions: {
    flexDirection: { xs: 'column', md: 'row' },
    gap: { xs: 2, md: 3 },
    mt: 3,
  },
}))
