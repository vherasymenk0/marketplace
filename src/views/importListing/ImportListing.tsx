'use client'

import { Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import { ImportListingForm } from '~/features/listing'

import { Text } from '~/shared/components/base/Text'

import { useStyles } from './ImportListing.styles'

export const ImportListing = () => {
  const styles = useStyles()

  return (
    <Stack sx={styles.wrapper}>
      <Stack sx={styles.content}>
        <Text variant="h6" sx={styles.title}>
          <FormattedMessage id="importListing.title" defaultMessage="Create Products" />
        </Text>
        <ImportListingForm />
      </Stack>
    </Stack>
  )
}
