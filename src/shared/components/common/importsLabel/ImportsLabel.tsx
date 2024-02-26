import { TypographyProps, capitalize } from '@mui/material'

import { Text } from '~/shared/components/base/Text'

import { useStyles } from './ImportsLabel.styles'

interface Props {
  variant?: 'primary' | 'info' | 'success' | 'error'
  value: string
  textProps?: TypographyProps
}

export const ImportsLabel = ({ variant = 'primary', value, textProps }: Props) => {
  const styles = useStyles({ variant })
  const label = capitalize(value.replace(/_/g, ' '))

  return (
    <Text variant="body4" sx={styles.label} {...textProps}>
      {label}
    </Text>
  )
}
