import { Container, Drawer, Stack } from '@mui/material'
import { useState } from 'react'

import { SearchProducts } from '~/features/searchProducts'

import CloseIcon from '~/shared/assets/icons/close.svg'
import LoopIcon from '~/shared/assets/icons/loop.svg'
import { ActionIcon } from '~/shared/components/base/ActionIcon'
import { SvgIcon } from '~/shared/components/base/SvgIcon'

import { useStyles } from './MobileSearch.styles'

export const MobileSearch = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const styles = useStyles()

  return (
    <>
      <ActionIcon sx={styles.icon} onClick={() => setIsDrawerOpen(true)}>
        <SvgIcon icon={LoopIcon} />
      </ActionIcon>

      <Drawer open={isDrawerOpen} anchor="right" PaperProps={{ sx: styles.paper }}>
        <Container>
          <Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={styles.header}
            >
              <SearchProducts FormControlProps={{ sx: { width: '100%' } }} />
              <ActionIcon sx={{ ml: 2.5 }} onClick={() => setIsDrawerOpen(false)}>
                <SvgIcon icon={CloseIcon} />
              </ActionIcon>
            </Stack>
          </Stack>
        </Container>
      </Drawer>
    </>
  )
}
