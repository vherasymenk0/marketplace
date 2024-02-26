import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette, typography }) => ({
  wrapper: {
    position: 'absolute',
    width: '100%',
    backgroundColor: palette.grey[25],
    height: 'calc(100vh - 77px)',
    zIndex: 1201,
    alignItems: 'flex-start',
    overflow: 'hidden',

    ul: {
      width: '100%',
      li: {
        width: '100%',
        button: {
          width: '100%',
          justifyContent: 'space-between',
        },
      },
    },
  },
  listsWrapper: {
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
    height: '100%',

    '& .MuiList-root': {
      padding: 0,
    },
  },
  categoryList: {
    overflowY: 'auto',
    li: {
      '&:hover, &.active-category': {
        backgroundColor: palette.primary[500],
        color: palette.primary.main,

        button: {
          backgroundColor: 'transparent',
          color: 'inherit',

          'svg path': {
            fill: palette.primary.main,
          },
        },
      },
    },
  },
  subcategoryList: {
    display: 'none',
    position: 'absolute',
    height: '100%',
    backgroundColor: palette.grey[25],
    px: 2,
    width: '100%',
    zIndex: 1,

    '&.active': {
      display: 'flex',
    },

    ul: {
      margin: 0,
      overflowY: 'auto',

      li: {
        mb: 3,
        padding: 0,
        color: palette.grey[900],
        a: {
          color: 'inherit',
          display: 'flex',
        },
      },
    },
  },
  backBtn: {
    ...typography.subtitle2,
    margin: '18px 0 16px 16px',
    color: palette.grey[900],
    svg: {
      transform: 'scale(-1)',
    },

    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  categoryItem: {
    padding: '12px 24px',
    width: '100%',

    'button > .MuiTypography-root': {
      textAlign: 'left',
    },
  },
}))
