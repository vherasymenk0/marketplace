import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ typography }) => ({
  root: {
    '.MuiTableRow-root .MuiTableCell-root': {
      '&:last-child ': {
        padding: '20px 32px',

        '.MuiTypography-root': {
          maxWidth: '100%',
        },
      },

      '.MuiTypography-root': {
        maxWidth: 380,
        minWidth: { xs: 100, lg: 200 },
        wordBreak: 'break-word',
        ...typography.body5,
      },
    },
  },
}))
