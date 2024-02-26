import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

interface Props {
  isOpen: boolean
}

export const useStyles = makeSxStyles(({ palette }, { isOpen }: Props) => ({
  btn: {
    width: { xs: 184, md: 171 },
    height: { xs: 48, md: 56 },

    ...(isOpen && {
      backgroundColor: palette.primary.dark,
    }),
  },
  list: {
    backgroundColor: palette.grey[25],
    border: `1px solid ${palette.grey[700]}`,
    borderRadius: 1,
    px: '16px 0',
    py: 2,
    mt: 1,
  },
  listItem: {
    py: 1.5,
    px: 3,
    minWidth: 238,

    label: {
      width: '100%',
    },
  },
}))
