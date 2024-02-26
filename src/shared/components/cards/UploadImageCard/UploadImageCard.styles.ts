import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

interface Props {
  isCover: boolean
  isLoading: boolean
  isError: boolean
}

export const useStyles = makeSxStyles(({ palette }, { isCover, isLoading, isError }: Props) => ({
  root: {
    height: '90px',
    width: '90px',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    borderRadius: 1,
    objectFit: 'cover',
    objectPosition: 'center',

    '&:hover': {
      '.delete-button path': {
        fill: palette.secondary[700],
      },
    },

    ...(isError && {
      '&': {
        border: `1px solid ${palette.error.main}`,

        '&:hover': {
          border: `1px solid ${palette.error.main}`,
        },
      },
    }),

    ...(!isLoading &&
      !isCover &&
      !isError && {
        '&:hover, &:active': {
          img: {
            border: `1px solid ${palette.grey[600]}`,
          },
        },
      }),
  },
  coverTextContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.primary.main,
    color: palette.common.white,
    textAlign: 'center',
  },
  image: {
    objectFit: 'cover',
    border: `1px solid ${palette.grey[100]}`,
    borderRadius: 1,

    ...(isCover && {
      '&, &:hover': {
        border: `2px solid ${palette.primary.main}`,
      },
    }),

    ...(isError && {
      '&': {
        opacity: 0.2,
        border: 'none',

        '&:hover': {
          border: 'none',
        },
      },
    }),

    ...(isLoading && {
      opacity: 0.2,
    }),
  },
  deleteButton: {
    position: 'absolute',
    top: 4,
    right: 4,
    borderRadius: '50%',
    height: 2,
    width: 2,

    '&, &:hover': {
      backgroundColor: palette.grey[100],
    },

    '&:active': {
      path: {
        fill: palette.secondary.main,
      },
    },

    'svg path': {
      fill: palette.grey[600],
    },
  },
  loadingIconContainer: {
    lineHeight: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  errorIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    'svg path': {
      fill: 'transparent',
    },
  },
}))
