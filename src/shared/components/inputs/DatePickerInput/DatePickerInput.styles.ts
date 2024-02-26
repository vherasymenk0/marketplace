import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette, shape }) => ({
  root: {
    '& .MuiInputBase-root': {
      pr: 2,
    },
    '& .MuiInputAdornment-root': {
      '& .MuiButtonBase-root': {
        padding: 0,
        mr: 0,
      },
    },
  },
  header: {
    '& .MuiPickersCalendarHeader-label': {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: '20px',
    },

    '.MuiPickersCalendarHeader-switchViewIcon': {
      color: palette.grey[900],
    },

    '.MuiSvgIcon-fontSizeInherit': {
      color: palette.secondary[700],
    },
  },
  day: {
    '&.MuiPickersDay-today': {
      borderColor: palette.primary.main,
    },

    '&.MuiPickersDay-root': {
      fontSize: 14,
      fontWeight: 400,
    },
    '&.MuiPickersDay-dayOutsideMonth': {
      color: palette.grey[400],
    },
  },
  paper: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: palette.grey[700],
    borderRadius: `${shape.borderRadius}px`,
    overflow: 'hidden',
    boxShadow: 'none',

    '& .MuiDateCalendar-root': {
      width: 300,
    },
    '& .MuiDayCalendar-slideTransition': {
      minHeight: 200,
    },

    '& .MuiPickersYear-yearButton': {
      fontSize: 14,
    },
  },
}))
