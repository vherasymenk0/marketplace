import { MenuItem, Stack, SxProps } from '@mui/material'
import Badge from '@mui/material/Badge'
import dynamic from 'next/dynamic'

import { NextLink } from '~/shared/components/base/NextLink'
import { SvgIcon, SvgIconProps } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'

import { useStyles } from './SidebarItem.styles'

interface Props extends Pick<SvgIconProps, 'icon'> {
  title: string
  href?: string
  withBadge?: boolean
  hideArrow?: boolean
  sx?: SxProps
  onClick?: () => void
}

const ArrowIcon = dynamic(() =>
  import('~/shared/assets/icons/arrow-right.svg').then((mod) => mod.default),
)

export const SidebarItem = ({
  icon,
  title,
  href,
  withBadge = false,
  hideArrow = false,
  sx,
  onClick,
}: Props) => {
  const styles = useStyles()

  const item = (
    <MenuItem disableRipple sx={{ ...styles.root, ...sx }} onClick={onClick}>
      <Stack sx={styles.leftContent}>
        <Badge sx={styles.badge} variant="dot" invisible={!withBadge}>
          <SvgIcon icon={icon} sx={styles.startIcon} />
        </Badge>
        <Text variant="subtitle3">{title}</Text>
      </Stack>
      {!hideArrow ? <SvgIcon size={32} icon={ArrowIcon} /> : null}
    </MenuItem>
  )

  if (href) {
    return (
      <NextLink href={href} passHref noLinkStyle sx={{ ...styles.link, ...sx }}>
        {item}
      </NextLink>
    )
  }

  return item
}
