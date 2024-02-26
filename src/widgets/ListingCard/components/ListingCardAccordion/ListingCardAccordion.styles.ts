import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

interface StyleProps {
  isOpen?: boolean
}

export const useStyles = makeSxStyles((_, { isOpen }: StyleProps) => ({
  content: {
    overflow: 'hidden',
    transition: 'all .25s ease',
    ...(isOpen ? { maxHeight: 500, pb: 3 } : { maxHeight: 0 }),
  },
  summary: {
    display: 'inline-flex',
    flexDirection: 'row',
    width: 'fit-content',

    '&:hover': {
      backgroundColor: 'transparent',
    },

    svg: {
      ml: 1,
      ...(isOpen ? { transform: 'rotate(180deg)' } : {}),
    },
  },
}))
