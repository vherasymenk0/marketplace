import { Stack } from '@mui/material'

import { Text } from '~/shared/components/base/Text'

interface Props {
  label: string
  data: string
}

export const ListingInfo = ({ data, label }: Props) => {
  return (
    <Stack direction="row" gap={1}>
      <Text variant="body4" color="grey.600">
        {label}:
      </Text>

      <Text variant="body4" color="grey.900">
        {data}
      </Text>
    </Stack>
  )
}
