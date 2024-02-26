import { Stack } from '@mui/material'

import Logo from '~/shared/assets/logos/dark.svg'

import { SvgIcon, SvgIconProps } from '../../base/SvgIcon'

import { useStyles } from './EmptyImage.styles'

interface Props {
  logoSize?: SvgIconProps['size']
}

export const EmptyImage = ({ logoSize }: Props) => {
  const styles = useStyles()

  return (
    <Stack sx={styles.container}>
      <SvgIcon icon={Logo} size={logoSize ?? { height: 24, width: 104 }} />
    </Stack>
  )
}
