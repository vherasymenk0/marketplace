import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ typography }) => ({
  triggerBtn: {
    ...typography.button1,
    minWidth: 'unset',
    py: 2.124,
    px: 1.5,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}))
