import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette, typography }) => ({
  desktopRoot: {
    margin: '0 8px 0 0',
    color: 'inherit',
    ...typography.subtitle4,
    wordBreak: 'break-All',
    textAlign: 'left',
    maxWidth: '270px',
    minWidth: '130px',

    '&:hover': {
      backgroundColor: 'unset',
      color: 'inherit',
    },
    '.MuiAvatar-root': {
      width: 32,
      height: 32,
      borderRadius: '100%',
      background: 'linear-gradient(137deg, #166F86 15.49%, #488A9B 87.5%) 50% / cover no-repeat',
      ...typography.body5,
      img: {
        width: 30,
        height: 30,
        borderRadius: 'inherit',
      },
    },
  },

  mobileRoot: {
    padding: '0 16px',
    margin: '16px 0',
    width: '100%',
    position: 'relative',
    justifyContent: 'flex-start',

    '&:hover, &:active': {
      backgroundColor: 'unset',
    },

    '&.MuiButtonBase-root.MuiButton-root.MuiLoadingButton-root .MuiButton-startIcon': {
      margin: '0 16px 0 0',
    },

    '& > .MuiBox-root': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 0.5,
      maxWidth: '75%',
      wordBreak: 'break-all',
      textAlign: 'left',

      'span:first-child': {
        color: palette.grey[900],
      },
      'span:nth-child(2)': {
        color: palette.grey[600],
      },
    },

    '& > .MuiButton-endIcon': {
      position: 'absolute',
      right: '8px',
    },

    '.MuiAvatar-root': {
      width: 56,
      height: 56,
      background: 'linear-gradient(137deg, #166F86 15.49%, #488A9B 87.5%) 50% / cover no-repeat',
      ...typography.body5,

      img: {
        width: 54,
        height: 54,
        borderRadius: 'inherit',
      },
    },
  },
}))
