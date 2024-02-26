import { SxProps, Theme, useMediaQuery } from '@mui/material'

import DarkLogoIcon from '~/shared/assets/logos/dark.svg'
import LightLogoIcon from '~/shared/assets/logos/light.svg'

import { NextLink } from '../../base/NextLink'
import { SvgIcon } from '../../base/SvgIcon'

interface Props {
  sx?: SxProps
  variant?: 'dark' | 'light'
}

const logo = {
  dark: DarkLogoIcon,
  light: LightLogoIcon,
}

export const Logo = ({ sx, variant = 'dark' }: Props) => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const height = isMobile ? 23 : 30
  const width = isMobile ? 88 : 111

  return (
    <NextLink passHref href="/" noLinkStyle sx={sx}>
      <SvgIcon icon={logo[variant]} size={{ width, height }} />
    </NextLink>
  )
}
