import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette, typography }) => ({
  paper: {
    position: 'relative',
    alignItems: { xs: 'center', md: 'flex-start' },
    textAlign: { xs: 'center', md: 'left' },
    px: { xs: 3, md: 13 },
    pt: 5,
    pb: { xs: 5, md: 6 },
    maxWidth: { xs: '100%', md: '808px' },
    width: '100%',
  },
  closeIcon: {
    position: 'absolute',
    top: { xs: 16, md: 24 },
    right: { xs: 16, md: 24 },

    path: {
      fill: palette.grey[900],
    },
  },
  title: {
    mt: { xs: 3, md: 2 },
    color: palette.grey[900],
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    mt: 2,
    color: palette.grey[600],
    gap: 2,
    '& > p': {
      display: 'block',
      my: 0,
    },
  },
  buttons: {
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: { xs: 'center', md: 'flex-end' },
    alignItems: 'center',
    mt: 3,
    width: '100%',
    gap: { xs: 2, md: 3 },

    '& > .modal-submit-btn': {
      width: { xs: '100%', md: 'unset' },
    },

    'button:first-child': {
      order: { xs: 1, md: 0 },
      ...typography.subtitle4,
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },

    'button:nth-child(2)': {
      padding: '13px 27.5px',
      py: 1.625,
      px: 3.375,
      ...typography.button2,
    },
  },
}))
