import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  paper: {
    px: 3,
    pt: 7,
    pb: 5,
    width: '100%',
  },
  closeIcon: {
    position: 'absolute',
    top: { xs: 16, md: 24 },
    right: { xs: 16, md: 24 },

    path: { fill: palette.grey[900] },
  },
  label: {
    color: palette.grey[600],
  },
  text: {
    mt: 0.5,
    color: palette.grey[900],
  },
}))
