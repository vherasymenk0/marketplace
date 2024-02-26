import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

interface StyleProps {
  isDragActive: boolean
}

export const useStyles = makeSxStyles(({ palette }, { isDragActive }: StyleProps) => ({
  inputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    py: 3,
    color: palette.text.primary,
    backgroundColor: palette.grey[50],
    border: `1px dashed ${palette.grey[300]}`,
    borderRadius: 0.5,
    cursor: 'pointer',

    ...(isDragActive && {
      backgroundColor: palette.info.light,
      border: `2px dashed ${palette.info.main}`,
    }),

    svg: {
      path: {
        fill: palette.primary.main,
      },
    },
  },
}))
