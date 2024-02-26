import { Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import { Text } from '~/shared/components/base/Text'

import { useStyles } from './DeactivatedMessage.styles'

export const DeactivatedMessage = () => {
  const styles = useStyles()

  return (
    <Stack sx={styles.root}>
      <Text variant="subtitle2" color="primary.main">
        <FormattedMessage
          id="listingPage.deactivated.title"
          defaultMessage="Product is Deactivated"
        />
      </Text>
      <Text variant="body3" color="grey.900">
        <FormattedMessage
          id="listingPage.deactivated.text"
          defaultMessage="We don't know when or if this product will be available again."
        />
      </Text>
    </Stack>
  )
}
