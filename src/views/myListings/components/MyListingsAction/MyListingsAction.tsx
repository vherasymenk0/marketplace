import { Stack, Theme, useMediaQuery } from '@mui/material'
import { FormattedMessage, useIntl } from 'react-intl'

import { BulkSendForApproveModal } from '~/features/listing/sendForApprove'

import { LISTING_STATUSES, ListingModel } from '~/entities/listing'

import { Button } from '~/shared/components/base/Button'
import { InformationTip } from '~/shared/components/base/InformationTip'

import { useStyles } from './MyListingsAction.styles'

interface Props {
  status: ListingModel['status']
  listingsCount: number
}

export const MyListingsAction = ({ status, listingsCount }: Props) => {
  const intl = useIntl()
  const styles = useStyles()
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const isDraftTab = status === LISTING_STATUSES.draft

  return (
    <Stack sx={styles.wrapper}>
      {isMobile ? (
        <InformationTip
          text={intl.formatMessage({
            defaultMessage:
              'To import new listings, use the web version on your computer or laptop',
            id: 'myListings.actions.mobileTip',
          })}
        />
      ) : (
        <Button size="medium" sx={styles.importBtn} href="/vendor/import-listing">
          <FormattedMessage defaultMessage="Import Listing" id="myListings.actions.importListing" />
        </Button>
      )}
      {isDraftTab ? <BulkSendForApproveModal listingsCount={listingsCount} /> : null}
    </Stack>
  )
}
