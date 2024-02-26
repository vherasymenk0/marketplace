'use client'

import { SxProps } from '@mui/material'
import { usePathname } from 'next/navigation'
import { FormattedMessage } from 'react-intl'

import { Button } from '~/shared/components/base/Button'
import { useRouter } from '~/shared/hooks/useRouter'

interface Props {
  buttonsStyle: SxProps
  importedCount: number
  failedCount: number
}

export const ImportDetailsHeaderActions = ({ buttonsStyle, importedCount, failedCount }: Props) => {
  const router = useRouter()
  const pathname = usePathname()

  const pathSegments = pathname.split('/')
  const lastSegment = pathSegments[pathSegments.length - 1] ?? ''

  const isFailedPageWithData = lastSegment === 'failed-listings' && failedCount > 0
  const isImportedWithData = lastSegment === 'imported-listings' && importedCount > 0

  if (isFailedPageWithData)
    return (
      <Button onClick={() => router.push('/vendor/import-listing')} sx={buttonsStyle}>
        <FormattedMessage id="importDetails.upload.btn" defaultMessage="Go to Upload File" />
      </Button>
    )

  if (isImportedWithData)
    return (
      <Button
        onClick={() => router.push('/vendor/my-listings?filter_by_status=draft')}
        sx={buttonsStyle}
      >
        <FormattedMessage id="importDetails.draft.btn" defaultMessage="Go to Draft" />
      </Button>
    )

  return null
}
