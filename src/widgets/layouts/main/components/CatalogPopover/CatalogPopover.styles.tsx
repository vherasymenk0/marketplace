import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  trigger: {
    position: 'relative',
    padding: '28px 39px',
    borderRadius: '48px',
    width: 'max-content',
    height: 'max-content',
    minWidth: 'max-content',

    '&:hover, &:active, &[aria-selected="true"]': {
      backgroundColor: palette.primary[500],
    },
    '&:hover': {
      color: palette.primary[800],
    },
    '&:active': {
      color: palette.primary.main,
    },
  },
  popover: {
    '.MuiPaper-root': {
      display: 'grid',
      gridTemplateColumns: '288px auto',
      height: '722px',
      width: '1016px',
      border: `1px solid ${palette.grey[200]}`,
      overflow: 'hidden',

      '& > .MuiList-root': {
        padding: '8px 0',
      },

      '& > div > ul': {
        padding: '0',
      },
    },
  },
  categoryMenu: {
    '&.MuiList-root': {
      position: 'relative',
      flexDirection: 'row',
      py: 2,
      overflowY: 'auto',

      li: {
        padding: 0,
        color: palette.grey[900],

        '&:hover, &.active': {
          backgroundColor: palette.primary[500],
          color: palette.primary.main,

          'button svg path': {
            fill: palette.primary.main,
          },
        },

        a: {
          width: '100%',
          justifyContent: 'space-between',
          padding: '16px 8px 16px 24px',
          backgroundColor: 'inherit',
          color: 'inherit',
          borderRadius: 0,

          '& > .MuiTypography-root': {
            textAlign: 'left',
          },

          'svg path': {
            fill: palette.grey[900],
          },
        },
      },
    },
  },
  subcategoryMenu: {
    display: 'none',
    maxWidth: '100%',
    width: '100%',
    backgroundColor: palette.primary[400],
    padding: '32px 32px 58px 24px',
    overflowY: 'auto',

    '&.active': {
      display: 'flex',
    },

    ul: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      columnGap: 7.5,
      rowGap: 2,

      li: {
        padding: 0,
        color: palette.grey[900],

        a: {
          color: 'inherit',
        },
      },
    },
  },
}))
