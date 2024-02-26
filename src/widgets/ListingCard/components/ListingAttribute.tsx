import { Stack } from '@mui/material'

import { Text } from '~/shared/components/base/Text'

interface Props {
  label: string
  value: string | null
}

export const ListingAttribute = ({ label, value }: Props) => {
  if (!value) return null

  return (
    <Stack gap={0.5}>
      <Text variant="body4" color={({ palette }) => palette.grey[600]}>
        {label}
      </Text>

      <Text variant="body4" color={({ palette }) => palette.grey[900]}>
        {value}
      </Text>
    </Stack>
  )
}
