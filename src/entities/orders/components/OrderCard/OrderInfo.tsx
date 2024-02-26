import { Stack, StackProps, TypographyProps } from '@mui/material'

import { Text } from '~/shared/components/base/Text'

interface Props {
  title: string
  data?: string | null
  direction?: StackProps['direction']
  dataColor?: TypographyProps['color']
  fixedWidth?: boolean
}

export const OrderInfo = ({
  data,
  title,
  direction = 'column',
  dataColor = 'grey.900',
  fixedWidth,
}: Props) => {
  if (!data) return null

  return (
    <Stack
      direction={direction}
      gap={0.5}
      {...(fixedWidth && { sx: { width: { xs: 123, md: 'auto' } } })}
    >
      <Text variant="subtitle3" color="grey.600">
        {title}
      </Text>

      <Text variant="subtitle3" color={dataColor}>
        {data}
      </Text>
    </Stack>
  )
}
