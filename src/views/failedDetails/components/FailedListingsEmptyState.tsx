import { Theme, useMediaQuery } from '@mui/material'
import { useIntl } from 'react-intl'

import { EmptyState } from '~/shared/components/common/EmptyState'
import { useRouter } from '~/shared/hooks/useRouter'

export const FailedListingsEmptyState = () => {
  const intl = useIntl()
  const router = useRouter()
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <EmptyState
      title={intl.formatMessage({
        defaultMessage: 'No Failed Listings Found',
        id: 'vendorImports.failed.emptyState.title',
      })}
      description={intl.formatMessage({
        defaultMessage: "Great job! You don't have failed imports in this file.",
        id: 'vendorImports.failed.emptyState.text',
      })}
      {...(!isMobile && {
        action: {
          label: intl.formatMessage({
            defaultMessage: 'Go to Upload FIle',
            id: 'vendorImports.failed.upload.btn',
          }),
          onClick: () => router.push('/vendor/import-listing'),
        },
      })}
    />
  )
}
