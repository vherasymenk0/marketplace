import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette: { primary } }) => ({
  root: {
    background: `linear-gradient(${primary[400]}, ${primary[400]}) padding-box, linear-gradient(93.44deg, ${primary.dark} 1.04%, ${primary.main} 100%) border-box`,
    borderRadius: 1,
    border: '1px solid transparent',
    gap: 1,
    py: 2.5,
    px: 2,
  },
}))
