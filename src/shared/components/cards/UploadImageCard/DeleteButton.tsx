import { SxProps, Theme } from '@mui/material'

import CloseIcon from '~/shared/assets/icons/close.svg'
import { Button } from '~/shared/components/base/Button'

interface DeleteButtonProps {
  sx?: SxProps<Theme>
  onClick: () => void
}

export const DeleteButton = ({ sx, onClick }: DeleteButtonProps) => (
  <Button
    variant="text"
    color="primary"
    onClick={onClick}
    className="delete-button"
    data-testid="delete-button"
    sx={{ ...sx }}
  >
    <CloseIcon />
  </Button>
)
