'use client'

import { AppBar, Container, Stack, Toolbar } from '@mui/material'
import dynamic from 'next/dynamic'

import { CurrencySelect } from '~/features/currency'
import { SearchProducts } from '~/features/searchProducts'

import { CSSHide } from '~/shared/components/base/CSSHide'
import { Logo } from '~/shared/components/common/Logo'

import { CatalogPopover } from '../CatalogPopover'
import { HamburgerButton } from '../HamburgerButton'
import { SignInHeaderModal } from '../SignInHeaderModal'

import { useStyles } from './Header.styles'

const HeaderActions = dynamic(() => import('../HeaderActions').then((mod) => mod.HeaderActions))

export const Header = () => {
  const styles = useStyles()

  return (
    <AppBar position="static" sx={styles.headerContainer}>
      <Container>
        <Toolbar variant="regular" sx={styles.toolbar}>
          <Stack>
            <Stack sx={styles.leftContent}>
              <Logo variant="light" sx={{ mr: 11 }} />
              <CSSHide screen="mobile">
                <CurrencySelect color="light" />
              </CSSHide>
            </Stack>
            <Stack sx={styles.rightContent}>
              <HeaderActions />
              <HamburgerButton />
            </Stack>
          </Stack>
          <Stack>
            <SearchProducts
              FormControlProps={{ sx: styles.searchFormControl }}
              startAdornment={<CatalogPopover />}
            />
          </Stack>
        </Toolbar>
        <SignInHeaderModal />
      </Container>
    </AppBar>
  )
}
