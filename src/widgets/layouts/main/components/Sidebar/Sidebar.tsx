'use client'

import { Container, Stack, SwipeableDrawer } from '@mui/material'

import CloseIcon from '~/shared/assets/icons/close.svg'
import { ActionIcon } from '~/shared/components/base/ActionIcon'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Logo } from '~/shared/components/common/Logo'

import { useSidebarContext } from '../../lib/context/SidebarContext'
import { MobileMenu } from '../MobileMenu/MobileMenu'

import { useStyles } from './Sidebar.styles'

export const Sidebar = () => {
  const { isOpen, onChangeOpen } = useSidebarContext()
  const styles = useStyles()

  const handleCloseMenu = () => {
    onChangeOpen(false)
  }

  const handleOpenMenu = () => {
    onChangeOpen(true)
  }

  return (
    <SwipeableDrawer
      open={isOpen}
      anchor="right"
      onOpen={handleOpenMenu}
      onClose={handleCloseMenu}
      sx={styles.drawer}
      PaperProps={{ sx: styles.paper }}
    >
      <Container>
        <Stack sx={styles.header}>
          <Logo />
          <ActionIcon onClick={handleCloseMenu}>
            <SvgIcon icon={CloseIcon} size={32} color="grey.900" />
          </ActionIcon>
        </Stack>
      </Container>

      <MobileMenu />
    </SwipeableDrawer>
  )
}
