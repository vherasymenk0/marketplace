import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  modal: {
    '.MuiBackdrop-root': {
      backgroundColor: palette.secondary.main,
      opacity: '0.9 !important',
    },
  },
  root: {
    outline: 'none',

    '& .image-gallery-content': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: { xs: 'center', md: 'space-between' },
      alignContent: 'space-between',
      height: { xs: 'calc(100vh - 100px)', md: 'calc(100vh - 20px)' },
    },
    '& .image-gallery-slide-wrapper': {
      margin: 'auto 0',
    },
    '& .image-gallery-icon:hover': {
      color: palette.primary.main,
    },
    '& .image-gallery-slide': {
      opacity: 0,
      transition: 'opacity .2s ease-out !important',
    },
    '& .image-gallery-slide.image-gallery-center': {
      opacity: 1,
    },
    '& .image-gallery-thumbnails-container': {
      display: 'flex',
      justifyContent: { xs: 'flex-start', md: 'center' },
      gap: { xs: 1.5, md: 3 },
      mb: { xs: '30px', md: 0 },
    },

    '& .image-gallery-thumbnail': {
      cursor: 'pointer',
      border: 'none',
      mr: 0,
      borderRadius: 1,
      height: 80,
      width: 80,
      minWidth: 80,
      transition: 'all .2s ease-out !important',

      '&.active': {
        border: `2px solid ${palette.primary.main}`,
      },
    },
  },
  closeButton: {
    position: 'absolute',
    top: { xs: 8, md: 24 },
    right: { xs: 8, md: 24 },
    zIndex: 100,
    height: 56,
    width: 56,
    ':hover': {
      backgroundColor: 'transparent',

      path: {
        fill: palette.primary.main,
      },
    },
  },
}))
