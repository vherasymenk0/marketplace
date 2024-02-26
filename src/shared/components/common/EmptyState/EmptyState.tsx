import { Box, Stack, TypographyProps } from '@mui/material'
import { ComponentType, SVGProps } from 'react'

import { Button } from '../../base/Button'
import { Paper } from '../../base/Paper'
import { SvgIcon, SvgIconProps } from '../../base/SvgIcon'
import { Text } from '../../base/Text'
import { IconShape } from '../IconShape'

interface Props {
  title: string
  description: string
  action?: {
    label: string
    onClick: () => void
  }
  icon?: ComponentType<SVGProps<HTMLOrSVGElement>>
  iconProps?: Omit<SvgIconProps, 'icon'>
  titleProps?: TypographyProps
}

export const EmptyState = ({ title, description, action, icon, iconProps, titleProps }: Props) => {
  return (
    <Paper>
      {icon ? (
        <Box mb={3}>
          <IconShape>
            <SvgIcon icon={icon} {...iconProps} />
          </IconShape>
        </Box>
      ) : null}

      <Stack spacing={2}>
        <Text variant="h6" color="grey.900" {...titleProps}>
          {title}
        </Text>

        <Text variant="body3" color="grey.600">
          {description}
        </Text>
      </Stack>

      {action ? (
        <Button sx={{ mt: 4, width: 200, alignSelf: 'center' }} onClick={action.onClick}>
          {action.label}
        </Button>
      ) : null}
    </Paper>
  )
}
