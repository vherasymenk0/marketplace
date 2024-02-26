import { Stack } from '@mui/material'
import { ComponentType, SVGProps } from 'react'

import { NextLink } from '../../base/NextLink'
import { SvgIcon } from '../../base/SvgIcon'
import { Text } from '../../base/Text'

import { useStyles } from './SwitchUserBanner.styles'

interface Props {
  icon: ComponentType<SVGProps<HTMLOrSVGElement>>
  title: string
  action: {
    href: string
    label: string
  }
}

export const SwitchUserBanner = ({ icon, title, action }: Props) => {
  const styles = useStyles()

  return (
    <Stack gap={1} direction="row" sx={styles.container}>
      <SvgIcon icon={icon} size={24} stroke="primary.main" />
      <Stack gap={1}>
        <Text variant="subtitle4" color="secondary.main">
          {title}
        </Text>

        <Text variant="subtitle4">
          <NextLink href={action.href}>{action.label}</NextLink>
        </Text>
      </Stack>
    </Stack>
  )
}
