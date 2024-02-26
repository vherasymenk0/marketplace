import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

interface StyleProps {
  isError: boolean
}

export const useStyles = makeSxStyles(({ palette, shape }, { isError }: StyleProps) => ({
  root: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: isError ? palette.error.main : palette.secondary[700],
    borderRadius: shape.borderRadius / 8,
    padding: 2,
    position: 'relative',
    width: '100%',
    height: '74px',
  },
  wrapper: { width: 1, overflow: 'hidden', alignItems: 'flex-start' },
  content: {
    flex: 1,
    width: 'calc(100% - 40px)',
  },
  title: {
    color: palette.grey[900],
    maxWidth: 'calc(100% - 50px)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  sizeTitle: {
    fontSize: 14,
    lineHeight: '22px',
    color: palette.grey[600],
  },
  deleteButton: {
    position: 'absolute',
    top: '50%',
    mt: '-16px',
    right: 16,
  },
}))
