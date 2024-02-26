import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette, typography }) => {
  return {
    search: {
      width: '100%',
      height: { xs: 56, md: 78 },
      backgroundColor: palette.grey[25],
      borderRadius: '48px',
      boxShadow: '0px 6px 8px -4px rgba(0, 1, 11, 0.20)',
      border: `1px solid ${palette.grey[200]}`,
      ...typography.subtitle4,
      fontSize: '16px !important',

      '&:hover': {
        border: `1px solid ${palette.grey[200]}`,
      },

      '& > input': {
        borderBottomLeftRadius: '48px',
        borderTopLeftRadius: '48px',
      },

      '&.Mui-disabled': {
        '& > input': {
          backgroundColor: palette.grey[100],
          WebkitTextFillColor: palette.grey[500],
          '&::placeholder': {
            WebkitTextFillColor: palette.grey[500],
          },
        },

        '.MuiInputAdornment-root.MuiInputAdornment-positionEnd': {
          backgroundColor: palette.grey[100],
          '.MuiBox-root': {
            backgroundColor: palette.grey[400],
            'svg path': {
              fill: palette.secondary[500],
            },
          },
        },
      },

      '&.Mui-focused:not(.filled) > .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${palette.grey[200]}`,
      },

      '& > .MuiOutlinedInput-notchedOutline': {
        border: 'none !important',
      },

      '& > .MuiOutlinedInput-input': {
        '&, &:not(.MuiInputBase-inputMultiline).MuiInputBase-inputAdornedEnd': {
          height: '100%',
          padding: { xs: '0 0 0 18px', md: '0 0 0 24px' },
        },
      },

      '&.MuiInputBase-adornedEnd, &.MuiInputBase-adornedStart': {
        padding: 0,
        button: {
          display: { xs: 'none', md: 'flex' },
          position: 'relative',
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0,

          '&::before': {
            content: '""',
            position: 'absolute',
            right: 0,
            width: '1px',
            height: 48,
            backgroundColor: palette.grey[200],
          },
        },
      },

      '& > .MuiInputAdornment-root': {
        '&.MuiInputAdornment-positionEnd': {
          minHeight: '-webkit-fill-available',
          padding: { xs: '0 8px', md: '0 16px' },
          margin: 0,
          backgroundColor: palette.grey[25],
          borderBottomRightRadius: '48px',
          borderTopRightRadius: '48px',

          '.MuiBox-root': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: palette.primary.main,
            borderRadius: '100%',
            width: { xs: 40, md: 50 },
            height: { xs: 40, md: 50 },

            svg: {
              width: { xs: 24, md: 32 },
              height: { xs: 24, md: 32 },
              path: {
                fill: palette.grey[25],
              },
            },
          },
        },
      },
    },
  }
})
