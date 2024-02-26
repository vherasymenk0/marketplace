import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ typography }) => ({
  root: {
    '.MuiTableRow-root .MuiTableCell-root': {
      '.MuiTypography-root': {
        ...typography.body5,
        wordBreak: 'break-word',

        '&:not(.importDetailsFileCell)': {
          maxWidth: 145,
        },
      },
    },
  },
}))
