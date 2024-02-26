import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

interface Props {
  sortDirection?: string
}

export const useStyles = makeSxStyles(({ palette }, { sortDirection }: Props) => ({
  wrapper: {
    alignItems: 'center',
    ml: 1,
    p: 0.5,

    'svg ': {
      m: 0,
      transition: 'transform 0.3s ease',
    },
  },
  arrowUp: {
    path: {
      ...(sortDirection === 'asc'
        ? { fill: palette.primary.main }
        : { fill: palette.primary['600'] }),
    },
  },
  arrowDown: {
    transform: 'rotate(180deg)',
    path: {
      ...(sortDirection === 'desc'
        ? { fill: palette.primary.main }
        : { fill: palette.primary['600'] }),
    },
  },
}))
