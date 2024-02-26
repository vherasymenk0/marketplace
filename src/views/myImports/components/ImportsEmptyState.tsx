'use client'

import { useIntl } from 'react-intl'

import { EmptyState } from '~/shared/components/common/EmptyState'
import { useRouter } from '~/shared/hooks/useRouter'

export const ImportsEmptyState = () => {
  const intl = useIntl()
  const router = useRouter()

  return (
    <EmptyState
      title={intl.formatMessage({
        defaultMessage: 'No Imports Found',
        id: 'vendorImports.emptyState.title',
      })}
      description={intl.formatMessage({
        defaultMessage: 'Import your products now to showcase them to a wider audience.',
        id: 'vendorImports.emptyState.text',
      })}
      action={{
        label: intl.formatMessage({
          defaultMessage: 'Import Listings',
          id: 'vendorImports.emptyState.btn',
        }),
        onClick: () => router.push('/vendor/import-listing'),
      }}
    />
  )
}
