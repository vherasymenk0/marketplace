import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(() => ({
  triggerBtn: {
    px: 1.375,
    py: 1.625,

    '&:active': {
      borderWidth: '1px',
    },
  },
}))
