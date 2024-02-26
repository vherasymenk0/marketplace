'use client'

import { Theme, useMediaQuery } from '@mui/material'
import { useIntl } from 'react-intl'

import { EmptyState } from '~/shared/components/common/EmptyState'
import { useRouter } from '~/shared/hooks/useRouter'

export const ImportedListingsEmptyState = () => {
  const intl = useIntl()
  const router = useRouter()
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <EmptyState
      title={intl.formatMessage({
        defaultMessage: 'No Imported Listings Found',
        id: 'vendorImports.imported.emptyState.title',
      })}
      description={intl.formatMessage({
        defaultMessage:
          'Looks like there were issues with your file import. Review and fix any errors to ensure a smooth import process.',
        id: 'vendorImports.imported.emptyState.text',
      })}
      {...(!isMobile && {
        action: {
          label: intl.formatMessage({
            defaultMessage: 'Import Listings',
            id: 'vendorImports.imported.emptyState.btn',
          }),
          onClick: () => router.push('/vendor/import-listing'),
        },
      })}
    />
  )
}
