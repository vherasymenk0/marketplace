import { IconButton } from '@mui/material'
import dynamic from 'next/dynamic'

import { SvgIcon } from '~/shared/components/base/SvgIcon'

import { useSidebarContext } from '../../lib/context/SidebarContext'

import { useStyles } from './HamburgerButton.styles'

const HamburgerIcon = dynamic(() =>
  import('~/shared/assets/icons/hamburger.svg').then((mod) => mod.default),
)

export const HamburgerButton = () => {
  const styles = useStyles()
  const { onChangeOpen: onChangeSidebarOpen } = useSidebarContext()

  return (
    <>
      <IconButton sx={styles.hamburger} onClick={() => onChangeSidebarOpen(true)}>
        <SvgIcon icon={HamburgerIcon} />
      </IconButton>
    </>
  )
}
