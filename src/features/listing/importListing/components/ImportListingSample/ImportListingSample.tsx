'use client'

import { Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import InfoIcon from '~/shared/assets/icons/info.svg'
import { Button } from '~/shared/components/base/Button'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'

import { useStyles } from './ImportListingSample.styles'

export const ImportListingSample = () => {
  const styles = useStyles()

  return (
    <Stack sx={styles.wrapper}>
      <SvgIcon icon={InfoIcon} color="primary.main" />
      <Stack>
        <Text variant="subtitle4" color="primary.main" mb={0.5}>
          <FormattedMessage id="importListing.sample.title" defaultMessage="New to Importing?" />
        </Text>
        <Text variant="body4" color="grey.600" mb={1}>
          <FormattedMessage
            id="importListing.sample.text"
            defaultMessage="Our comprehensive guide on importing will help you through the process from start to finish"
          />
        </Text>

        <Button
          size="small"
          href="https://assets-staging-autoparts.s3.eu-central-1.amazonaws.com/store/listings_import_template.xlsx"
          sx={{ width: 164 }}
        >
          <FormattedMessage id="importListing.sample.download" defaultMessage="Download Sample" />
        </Button>
      </Stack>
    </Stack>
  )
}
