import { Grid, Stack } from '@mui/material'

import { SvgIcon, SvgIconProps } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'
import { IconShape } from '~/shared/components/common/IconShape'

interface Props {
  icon: SvgIconProps['icon']
  title: string
  description: string
}

export const InfoItem = ({ icon, title, description }: Props) => {
  return (
    <Grid item xs={3}>
      <Stack alignItems="center" gap={2}>
        <IconShape>
          <SvgIcon icon={icon} size={32} color="primary.dark" />
        </IconShape>

        <Stack alignItems="center" gap={0.5}>
          <Text variant="subtitle1" color="grey.900">
            {title}
          </Text>

          <Text variant="body4" color="grey.600">
            {description}
          </Text>
        </Stack>
      </Stack>
    </Grid>
  )
}
