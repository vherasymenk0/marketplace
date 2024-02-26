import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

interface StyleProps {
  show?: boolean
}

export const useStyles = makeSxStyles(({ palette }, { show }: StyleProps) => ({
  message: {
    position: 'relative',
    mt: 2,
    width: '100%',
    textAlign: { xs: 'center', md: 'left' },
    color: palette.grey[900],
    span: {
      position: 'absolute',
      top: 0,
      display: show ? 'block' : 'none',
      width: '100%',
      letterSpacing: 0,
    },
  },
}))
