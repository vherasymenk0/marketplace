import Badge from '@mui/material/Badge'
import { ReactNode } from 'react'

import { ButtonProps } from '~/shared/components/base/Button'
import { InlineTextButton } from '~/shared/components/base/InlineTextButton'
import { Text } from '~/shared/components/base/Text'

import { useStyles } from './HeaderItem.styles'

interface Props extends Pick<ButtonProps, 'color' | 'disabled' | 'sx' | 'onClick'> {
  title: string
  icon: ReactNode
  withBadge?: boolean
  href?: string
}

export const HeaderItem = ({ title, icon, href, withBadge = false, ...rest }: Props) => {
  const styles = useStyles()

  return (
    <InlineTextButton
      sx={styles.inlineBtn}
      href={href}
      startIcon={
        <Badge sx={styles.badge} color="secondary" variant="dot" invisible={!withBadge}>
          {icon}
        </Badge>
      }
      {...rest}
    >
      <Text variant="subtitle4" sx={styles.title}>
        {title}
      </Text>
    </InlineTextButton>
  )
}
