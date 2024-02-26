import type { Components } from '@mui/material'

import { breakpoints } from './breakpoints'
import { palette } from './palette'
import { shape } from './shape'
import { typography } from './typography'

export const components: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        height: '100%',
      },
      body: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
      },
      '#__next': {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      },
      main: {
        flex: 1,
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        maxWidth: '1440px !important',

        [`@media (max-width: ${breakpoints.values.md}px)`]: {
          paddingLeft: '16px',
          paddingRight: '16px',
        },

        [`@media (min-width: ${breakpoints.values.md}px)`]: {
          paddingLeft: '108px',
          paddingRight: '108px',
        },
      },
    },
  },
  MuiFormControl: {
    styleOverrides: {
      root: {
        marginLeft: 0,

        '.MuiFormHelperText-root': {
          marginTop: 4,
          color: palette.grey[600],
        },
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        fontSize: '16px !important',
        lineHeight: '20px !important',
        fontWeight: 500,
        marginBottom: 8,

        '&, &.Mui-error': {
          color: palette.grey[900],
        },
      },
      asterisk: {
        color: palette.error.main,
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        color: palette.grey[600],
        margin: 0,
        alignItems: 'flex-start',

        '&.Mui-disabled': {
          '& .MuiTypography-root': {
            color: palette.secondary[500],
          },
        },

        '.MuiCheckbox-root': {
          marginRight: 8,
        },
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      root: {
        '& > .MuiBackdrop-root': {
          background: 'rgba(11, 9, 10, 0.4)',
        },
        '& > .MuiDialog-container .MuiPaper-root': {
          border: `1px solid ${palette.grey[200]}`,
          boxShadow: '0px 6px 8px -3px rgba(51, 71, 255, 0.20)',

          [`@media (min-width: ${breakpoints.values.md}px)`]: {
            margin: '32px',
          },

          [`@media (max-width: ${breakpoints.values.md}px)`]: {
            margin: '32px 16px',
          },
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        fontSize: '18px !important',

        '&:hover': {
          borderColor: palette.grey[600],
        },

        '&.Mui-focused:not(.filled)': {
          '& > .MuiOutlinedInput-notchedOutline': {
            borderWidth: 1,
            borderColor: palette.grey[700],
          },
        },

        '&.success': {
          '& > .MuiOutlinedInput-notchedOutline': {
            borderColor: `${palette.success.main} !important`,
            borderWidth: 2,
          },
        },

        '&.filled': {
          '&:not(.Mui-error, .success) > .MuiOutlinedInput-notchedOutline': {
            borderColor: `${palette.grey[700]} !important`,
            borderWidth: 2,
          },
        },

        '&.MuiInputBase-adornedStart': {
          paddingLeft: 16,

          '& > svg:first-child': {
            marginRight: '16px',
          },

          '& > .MuiBox-root:first-child': {
            marginRight: '16px',
          },
        },

        '&.MuiInputBase-adornedEnd': {
          paddingRight: 16,
        },

        '&.Mui-disabled': {
          backgroundColor: palette.grey[100],

          '& > .MuiOutlinedInput-notchedOutline': {
            border: 'unset',
          },

          '.MuiInputAdornment-root, .MuiBox-root': {
            color: palette.grey[400],

            path: {
              fill: palette.grey[400],
            },
          },

          '.MuiInputBase-input': {
            WebkitTextFillColor: palette.grey[500],
          },

          svg: {
            path: {
              fill: palette.grey[500],
            },
          },

          '.MuiInputAdornment-root': {
            '.MuiTypography-root': {
              color: palette.grey[400],
            },
          },

          '& input::placeholder': {
            color: palette.grey[500],
            WebkitTextFillColor: palette.grey[500],
          },
        },

        '&.Mui-error': {
          '& > .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.error.main,
            borderWidth: 2,
          },
        },

        '.MuiInputAdornment-root': {
          '&, .MuiTypography-root': {
            color: palette.secondary[700],
          },

          path: {
            fill: palette.secondary[700],
          },
        },

        '.MuiOutlinedInput-input:not(.MuiInputBase-inputMultiline)': {
          padding: 16,

          '&.MuiInputBase-inputAdornedStart': {
            paddingLeft: 0,
          },

          '&.MuiInputBase-inputAdornedEnd': {
            paddingRight: 0,
          },

          '&::placeholder': {
            opacity: 0.8,
            color: palette.grey[400],
            WebkitTextFillColor: palette.grey[400],
          },
        },

        'input::-ms-reveal': {
          display: 'none',
        },
      },
      multiline: {
        alignItems: 'flex-start',
        padding: '16px',

        '.MuiInputBase-inputMultiline': {
          height: '100% !important',
          maxHeight: '100%',
          overflow: 'auto !important',
        },
      },

      notchedOutline: {
        borderColor: palette.grey[300],
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        margin: 0,
        fontSize: 14,
      },
    },
  },
  MuiSwitch: {
    styleOverrides: {
      root: {
        padding: 0,
        width: '40px',
        height: '24px',

        '& > .MuiButtonBase-root': {
          padding: 2,

          '&.Mui-checked': {
            transform: 'translateX(16px)',
            '& + .MuiSwitch-track': {
              backgroundColor: `${palette.secondary.main}`,
            },
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            backgroundColor: palette.secondary[500],
          },
          '& .MuiSwitch-thumb': {
            backgroundColor: palette.common.white,
          },
        },
        '& .MuiSwitch-track': {
          opacity: `1 !important`,
          borderRadius: shape.borderRadius * 6.25,
          backgroundColor: `${palette.grey[500]}`,
        },
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      select: {
        lineHeight: '24px',

        '& > span': {
          lineHeight: 'inherit',
          fontSize: 'inherit',
        },

        '.MuiButtonBase-root': {
          margin: 0,
        },
      },
      icon: {
        path: {
          fill: palette.secondary.main,
        },
      },
    },
  },
  MuiPopover: {
    styleOverrides: {
      root: {
        '.MuiList-root': {
          padding: '16px 0',
        },
      },
      paper: {
        marginTop: 8,
        border: `1px solid ${palette.grey[700]}`,
        boxShadow: 'unset',

        '.MuiMenuItem-root': {
          fontSize: 16,
          padding: '12px 24px',
          color: palette.grey[900],
        },
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        minHeight: 'auto',

        '&:hover, &.Mui-selected:hover, &.Mui-selected.Mui-focusVisible': {
          backgroundColor: `${palette.grey[100]}`,
        },

        '&.Mui-focusVisible': {
          backgroundColor: `${palette.grey[100]}`,
        },

        '&.Mui-selected': {
          backgroundColor: `${palette.grey[200]}`,
        },

        '.MuiCheckbox-root': {
          padding: 0,
        },
      },
    },
  },
  MuiAutocomplete: {
    styleOverrides: {
      root: {
        '.MuiOutlinedInput-root': {
          padding: 16,
          height: 58,

          '.MuiChip-root': {
            padding: '4px 8px',
            borderRadius: 5,
            backgroundColor: palette.grey[100],
            cursor: 'default',

            '.MuiChip-label': {
              fontSize: 14,
              padding: 0,
              marginRight: 8,
            },
          },

          input: {
            padding: '0 !important',
          },
        },
      },
      endAdornment: {
        right: '16px !important',

        'svg > path': {
          fill: palette.secondary.main,
        },
      },
      popupIndicator: {
        padding: 0,
      },
      paper: {
        marginTop: 8,
        border: `1px solid ${palette.grey[700]}`,
        borderRadius: 8,
        boxShadow: 'unset',

        '.MuiMenuItem-root': {
          fontSize: 16,
          padding: '12px 24px',
        },
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        color: palette.secondary.main,
        textDecoration: 'none',
        border: '1px solid transparent',

        ':hover': {
          borderBottomColor: 'inherit',
        },

        ':active': {
          borderColor: 'inherit',
          borderWidth: 2,
          borderRadius: 2,
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        minWidth: 164,
        textTransform: 'none',
        borderRadius: shape.borderRadius,

        '& svg': {
          fontWeight: 400,
          '& path': {
            fill: 'currentColor',
          },
        },

        '& .MuiButton': {
          '&-startIcon': {
            marginRight: 8,
            marginLeft: -6,
          },
          '&-endIcon': {
            marginLeft: 8,
            marginRight: -6,
          },
        },

        '&.Mui-disabled': {
          backgroundColor: palette.secondary[500],
          color: palette.grey[500],
          borderWidth: 0,
        },
      },
      sizeLarge: {
        height: 56,
        ...typography.button1,
      },
      sizeMedium: {
        height: 48,
        ...typography.button1,
      },
      sizeSmall: {
        height: 32,
        ...typography.button3,
      },
    },
    variants: [
      {
        props: { variant: 'contained', color: 'primary' },
        style: {
          color: palette.common.white,
          '&:hover': {
            backgroundColor: palette.primary[800],
          },
          '&:active': {
            backgroundColor: palette.primary.dark,
          },
          '&.MuiLoadingButton-loading': {
            backgroundColor: palette.primary.dark,
          },
          '& .MuiCircularProgress-root': {
            color: palette.common.white,
          },
        },
      },
      {
        props: { variant: 'contained', color: 'secondary' },
        style: {
          color: palette.common.white,
          backgroundColor: palette.secondary.main,
          '&:hover': {
            backgroundColor: palette.secondary[700],
          },
          '&:active': {
            backgroundColor: palette.secondary[800],
          },
          '&.MuiLoadingButton-loading': {
            backgroundColor: palette.secondary[800],
          },
          '& .MuiCircularProgress-root': {
            color: palette.common.white,
          },
        },
      },
      {
        props: { variant: 'outlined', color: 'primary' },
        style: {
          color: palette.primary.main,
          borderColor: palette.primary.main,
          '&:hover': {
            backgroundColor: palette.primary[500],
            color: palette.primary[800],
            borderColor: palette.primary[800],
          },
          '&:active': {
            backgroundColor: palette.primary[500],
            color: palette.primary.dark,
            borderColor: palette.primary[800],
            borderWidth: 2,
          },
          '&.MuiLoadingButton-loading': {
            backgroundColor: palette.primary[500],
            borderColor: palette.primary[800],
            borderWidth: 2,
          },
          '& .MuiCircularProgress-root': {
            color: palette.primary.dark,
          },
        },
      },
      {
        props: { variant: 'outlined', color: 'secondary' },
        style: {
          color: palette.secondary.main,
          borderColor: palette.secondary.main,
          '&:hover': {
            backgroundColor: palette.grey[100],
            color: palette.secondary[700],
            borderColor: palette.secondary[700],
          },
          '&:active': {
            backgroundColor: palette.grey[100],
            color: palette.secondary[800],
            borderColor: palette.secondary[800],
            borderWidth: 2,
          },
          '&.MuiLoadingButton-loading': {
            backgroundColor: palette.grey[100],
            borderColor: palette.secondary[800],
            borderWidth: 2,
          },
          '& .MuiCircularProgress-root': {
            color: palette.secondary[800],
          },
        },
      },
      {
        props: { variant: 'text', color: 'primary' },
        style: {
          color: palette.primary.main,
          backgroundColor: 'transparent',
          '&:hover': {
            color: palette.primary.main,
            backgroundColor: palette.primary[500],
          },
          '&:active': {
            color: palette.primary.dark,
            backgroundColor: palette.primary[500],
          },
          '&.MuiLoadingButton-loading': {
            backgroundColor: 'transparent',
          },
          '&.Mui-disabled': {
            backgroundColor: 'transparent',
          },
          '& .MuiCircularProgress-root': {
            color: palette.primary.dark,
          },
        },
      },
      {
        props: { variant: 'text', color: 'secondary' },
        style: {
          color: palette.secondary.main,
          backgroundColor: 'transparent',
          '&:hover': {
            color: palette.secondary[700],
            backgroundColor: palette.grey[100],
          },
          '&:active': {
            color: palette.secondary.main,
            backgroundColor: palette.grey[100],
          },
          '&.MuiLoadingButton-loading': {
            backgroundColor: 'transparent',
          },
          '&.Mui-disabled': {
            backgroundColor: 'transparent',
          },
          '& .MuiCircularProgress-root': {
            color: palette.secondary[800],
          },
        },
      },
      {
        props: { variant: 'text', disabled: true },
        style: {
          color: palette.grey[400],
        },
      },
    ],
  },
  MuiStep: {
    styleOverrides: {
      horizontal: {
        paddingRight: '16px',
        paddingLeft: '16px',

        ':first-child': {
          paddingLeft: 0,
        },

        ':last-child': {
          paddingRight: 0,
        },
      },
      vertical: {
        ':first-child': {
          paddingTop: 0,
        },

        ':last-child': {
          paddingBottom: 0,
        },
      },
    },
  },
  MuiStepLabel: {
    styleOverrides: {
      horizontal: {
        ':first-child': {
          paddingLeft: 0,
        },

        ':last-child': {
          paddingRight: 0,
        },
      },
      vertical: {
        ':first-child': {
          paddingTop: 0,
        },

        ':last-child': {
          paddingBottom: 0,
        },
      },
    },
  },
  MuiStepConnector: {
    styleOverrides: {
      line: {
        borderColor: palette.secondary.main,
        borderWidth: 2,
        height: '100%',
        width: '100%',
      },
      vertical: {
        marginLeft: 15,

        '&.Mui-disabled': {
          '.MuiStepConnector-line': {
            borderColor: palette.grey[200],
            borderLeftStyle: 'dashed',
          },
        },
      },
      horizontal: {
        '&.Mui-disabled': {
          '.MuiStepConnector-line': {
            borderColor: palette.grey[200],
            borderTopStyle: 'dashed',
          },
        },
      },
    },
  },
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: {
        '& .MuiToggleButtonGroup-grouped:not(:first-of-type)': {
          borderLeft: `1px solid ${palette.grey[200]}`,
        },

        [`@media (max-width: ${breakpoints.values.md}px)`]: {
          overflowX: 'scroll',
          '-ms-overflow-style': 'none',
          scrollbarWidth: 'none',

          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      },
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: {
        minWidth: 162,
        flex: 1,
        border: `1px solid ${palette.grey[200]}`,
        textTransform: 'none',
        paddingTop: '14px',
        paddingBottom: '14px',

        '&.MuiToggleButton-primary.Mui-selected': {
          backgroundColor: palette.primary[400],
        },
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        height: 'max-content',
        minHeight: 'unset',
      },
      scroller: {
        height: 'max-content',
      },
      flexContainer: {
        borderBottom: `1px solid ${palette.grey[200]}`,
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        width: '100%',
        maxWidth: '180px',
        minHeight: 'unset',
        paddingTop: '8px',
        paddingBottom: '8px',
        textTransform: 'none',
        flex: 1,

        [`@media (max-width: ${breakpoints.values.md}px)`]: {
          maxWidth: '100%',
        },

        '&.Mui-selected': {
          color: palette.primary.main,
        },
      },
    },
  },
  MuiPagination: {
    styleOverrides: {
      ul: {
        justifyContent: 'center',
      },
      root: {
        '.MuiPaginationItem-sizeLarge': {
          height: 48,
          width: 48,
        },
        '.MuiPaginationItem-previousNext': {
          svg: {
            path: {
              fill: palette.grey[700],
            },
          },
        },
        '.MuiPaginationItem-root:not(.Mui-selected)': {
          color: palette.grey[900],
        },
      },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        backgroundColor: palette.primary[500],

        '.MuiTableRow-root': {
          borderBottom: 'none',
        },

        '.MuiTableCell-root': {
          [`@media (min-width: ${breakpoints.values.md}px)`]: {
            paddingTop: '32px',
            paddingBottom: '32px',
          },

          [`@media (max-width: ${breakpoints.values.md}px)`]: {
            paddingTop: '26px',
            paddingBottom: '26px',
          },

          '&.--sortable': {
            cursor: 'pointer',
          },

          '& > .MuiTypography-root': {
            display: 'flex',
            alignItems: 'center',
            width: 'max-content',
          },
        },
      },
    },
  },
  MuiTableBody: {
    styleOverrides: {
      root: {
        '& > .MuiTableRow-root': {
          cursor: 'pointer',

          '&:hover': {
            backgroundColor: palette.primary[400],
          },

          '&:active': {
            backgroundColor: palette.primary[500],
          },
        },
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        borderBottom: `1px solid ${palette.grey[200]}`,

        '&:last-child': {
          borderBottom: 'none',
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        borderBottom: 'none',

        [`@media (min-width: ${breakpoints.values.md}px)`]: {
          padding: '20px 12px 20px 32px',
        },

        [`@media (max-width: ${breakpoints.values.md}px)`]: {
          padding: '20px 12px 20px 24px',
        },
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: palette.grey[200],
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        border: `1px solid ${palette.grey['200']}`,
        boxShadow: 'none',
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        background: palette.secondary.main,
        color: palette.grey[25],
        padding: '12px',
      },
      arrow: {
        color: palette.secondary.main,
      },
    },
  },
}
