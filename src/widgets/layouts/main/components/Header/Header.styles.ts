import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  headerContainer: {
    position: 'relative',
    mb: { xs: 4, md: 5 },
    backgroundColor: palette.primary.dark,
    border: 'none',
  },
  toolbar: {
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridTemplateRows: '1fr 1fr',
    gap: 1,
    mt: 2,
    minHeight: 'auto !important',
    pl: '0 !important',
    pr: '0 !important',

    '& > div': {
      flexDirection: 'row',
      width: '100%',
      minHeight: { xs: 35, md: 48 },
    },

    '& > div:first-child': {
      justifyContent: 'space-between',
    },
    '& > div:nth-child(2)': {
      position: 'relative',
      height: '100%',

      '& > .MuiFormControl-root': {
        width: '100%',
        maxWidth: 1016,
      },
    },
  },
  leftContent: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
  },
  rightContent: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: { xs: 2, md: 4 },
  },
  searchFormControl: {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}))
