import { Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import { FilterImports } from '~/features/vendorImports'

import { Text } from '~/shared/components/base/Text'

import { useStyles } from './ImportsHeader.styles'

interface Props {
  itemsCount: number
}

export const ImportsHeader = ({ itemsCount }: Props) => {
  const styles = useStyles()

  return (
    <Stack sx={styles.root}>
      <Stack>
        <Text variant="h6" color="grey.900">
          <FormattedMessage id="myImports.title" defaultMessage="Imports" />
        </Text>
        <Text variant="body4" color="grey.600" mt={1}>
          <FormattedMessage
            id="myImports.itemsCount"
            values={{
              count: itemsCount,
            }}
            defaultMessage="{count} items"
          />
        </Text>
      </Stack>
      <Stack sx={styles.leftContent}>
        <FilterImports />
      </Stack>
    </Stack>
  )
}
