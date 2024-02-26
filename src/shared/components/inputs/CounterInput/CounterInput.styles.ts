import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  root: {
    border: `1px solid ${palette.grey['200']}`,

    '&.MuiInputBase-root.MuiOutlinedInput-root.Mui-disabled': {
      backgroundColor: palette.grey['25'],

      '&:hover': {
        border: `1px solid ${palette.grey['200']}`,
      },

      '& > .MuiInputAdornment-root .MuiStack-root button': {
        backgroundColor: palette.primary[500],
        svg: { opacity: 0.5 },
        cursor: 'default',
        pointerEvents: 'none',
      },
    },

    fieldset: {
      borderWidth: '0 !important',
    },
  },
  buttons: {
    button: {
      p: 0,
      height: '14px !important',
      maxWidth: '20px !important',
      minWidth: '20px !important',
      backgroundColor: palette.primary[500],
      borderRadius: 0.5,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,

      svg: {
        height: '8px !important',
        width: '12px !important',

        path: {
          fill: `${palette.primary.main} !important`,
        },
      },

      '&.Mui-disabled': {
        backgroundColor: palette.primary[500],
        svg: { opacity: 0.5 },
      },
    },

    'button:last-child': {
      transform: 'rotate(180deg)',
    },
  },
}))
