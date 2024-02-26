'use client'

import { useSession } from 'next-auth/react'
import { MouseEvent } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'

import { activateListing } from '~/entities/listing'

import { Button } from '~/shared/components/base/Button'
import { useRouter } from '~/shared/hooks/useRouter'
import { showErrorToast, showSuccessToast } from '~/shared/services/toastr'

export const ActivateButton = ({ id }: { id: number }) => {
  const session = useSession()
  const router = useRouter()
  const intl = useIntl()

  const text = intl.formatMessage({
    id: 'myListings.activate.successText',
    defaultMessage:
      'Your listing has been successfully activated and now is live on the marketplace.',
  })

  const handleActivate = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    try {
      await activateListing({ id: String(id) }, { authorizeToken: session.data?.apiToken })
      showSuccessToast(text)
      router.refresh()
    } catch (err) {
      showErrorToast(String(err))
    }
  }

  return (
    <Button
      sx={{ width: { xs: '100%', md: 184 } }}
      size="medium"
      variant="outlined"
      onClick={handleActivate}
    >
      <FormattedMessage defaultMessage="Activate" id="listingCard.buttons.activate" />
    </Button>
  )
}
