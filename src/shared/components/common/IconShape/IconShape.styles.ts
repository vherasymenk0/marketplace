import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles<{ variant: 'primary' | 'error' | 'warning' }>(
  ({ palette }, { variant }) => {
    const isPrimaryVariant = variant === 'primary'
    const isErrorVariant = variant === 'error'
    const isWarningVariant = variant === 'warning'

    return {
      shape: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        content: '""',

        width: '80px',
        height: '80px',
        borderRadius: '100%',

        ...(isPrimaryVariant && { backgroundColor: palette.primary[500] }),
        ...(isErrorVariant && { backgroundColor: palette.error.light }),
        ...(isWarningVariant && { backgroundColor: palette.warning.light }),
      },
    }
  },
)
