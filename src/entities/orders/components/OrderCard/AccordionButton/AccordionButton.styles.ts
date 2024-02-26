import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

interface StyleProps {
  isOpen?: boolean
}

export const useStyles = makeSxStyles((_, { isOpen }: StyleProps) => ({
  accordionButton: {
    mt: { xs: 3, md: 0 },

    '&:hover': {
      backgroundColor: 'transparent',
    },

    svg: {
      ...(isOpen ? { transform: 'rotate(180deg)' } : {}),
    },
  },
}))
