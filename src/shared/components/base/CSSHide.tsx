import { Box } from '@mui/material'
import { ReactNode } from 'react'

interface Props {
  screen: 'mobile' | 'desktop'
  children: ReactNode
}
/**
 *  Hides content based on screen size
 * @param screen screen size to hide
 */
export const CSSHide = ({ screen, children }: Props) => {
  if (screen === 'desktop') {
    return (
      <Box
        sx={({ breakpoints }) => ({
          [breakpoints.up('md')]: {
            display: 'none',
          },
        })}
      >
        {children}
      </Box>
    )
  }

  return (
    <Box
      sx={({ breakpoints }) => ({
        [breakpoints.down('md')]: {
          display: 'none',
        },
      })}
    >
      {children}
    </Box>
  )
}
