import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

interface Props {
  isVerified?: boolean
}

export const useStyles = makeSxStyles((theme, { isVerified }: Props) => ({
  root: {
    gap: 1,

    '&:first-child': {
      justifyContent: 'center',
    },
  },
  FormControl: {
    maxWidth: 'fit-content',
    '.MuiOtpInput-Box': {
      gap: 'unset',
      '.MuiTextField-root': {
        marginRight: '8px',
      },
      '.MuiTextField-root:last-child': {
        marginRight: '0',
      },
    },
    '.MuiFormHelperText-root': {
      marginTop: '8px',
      fontSize: 14,
    },
  },
  inputs: {
    width: 56,
    height: 56,

    [theme.breakpoints.down('md')]: {
      width: 48,
      height: 48,
    },

    ...(isVerified && {
      '&& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '2px',
        borderColor: theme.palette.grey[700],
      },
    }),

    '.MuiInputBase-root': {
      fontSize: 16,
      height: 1,

      '&.Mui-focused': {
        input: {
          '&::placeholder': {
            WebkitTextFillColor: 'transparent',
          },
        },
      },
    },
  },
}))
