import { Stack } from '@mui/material'
import { ComponentType, SVGProps } from 'react'

import TipIcon from '~/shared/assets/icons/tip-icon.svg'

import { SvgIcon } from '../SvgIcon'
import { Text } from '../Text'

import { useStyles } from './InformationTip.styles'

interface Props {
  icon?: ComponentType<SVGProps<HTMLOrSVGElement>>
  text: React.ReactNode | string
}

export const InformationTip = ({ icon = TipIcon, text }: Props) => {
  const styles = useStyles()

  return (
    <Stack direction="row" sx={styles.container}>
      <SvgIcon icon={icon} size={24} color="primary.dark" />

      <Text variant="body4" color="grey.900">
        {text}
      </Text>
    </Stack>
  )
}
