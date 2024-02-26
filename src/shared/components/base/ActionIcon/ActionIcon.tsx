import { IconButton, SxProps } from '@mui/material'
import { ReactNode } from 'react'

interface Props {
  sx?: SxProps
  children: ReactNode
  onClick: () => void
}

export const ActionIcon = ({ sx, children, onClick }: Props) => (
  <IconButton disableRipple sx={{ p: 0, cursor: 'pointer', ...sx }} onClick={onClick}>
    {children}
  </IconButton>
)
