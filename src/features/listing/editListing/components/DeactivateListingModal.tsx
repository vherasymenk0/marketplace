'use client'

import { useSession } from 'next-auth/react'
import { useIntl } from 'react-intl'

import { ListingModal, deactivateListing } from '~/entities/listing'

import { Button } from '~/shared/components/base/Button'
import { useBoolean } from '~/shared/hooks/useBoolean'
import { useRouter } from '~/shared/hooks/useRouter'
import { showErrorToast } from '~/shared/services/toastr'

import { useStyles } from './deleteListingModal/DeleteListingModal.styles'

interface Props {
  listingName: string
  listingId: number
}

export const DeactivateListingModal = ({ listingName, listingId }: Props) => {
  const [isOpen, { off, on }] = useBoolean(false)
  const intl = useIntl()
  const styles = useStyles()
  const router = useRouter()
  const session = useSession()

  const btnText = intl.formatMessage({
    id: 'deleteListing.deactivateBtn',
    defaultMessage: 'Deactivate',
  })

  const title = intl.formatMessage(
    {
      id: 'deleteListing.deactivateTitle',
      defaultMessage: 'You are about to deactivate the following listing: {listingName}',
    },
    { listingName },
  )

  const text = intl.formatMessage({
    id: 'deleteListing.deactivateText',
    defaultMessage:
      'This action will deactivate the listing, hiding it from the marketplace. Please confirm that you want to proceed with the deactivation process.',
  })

  const handleSubmit = async () => {
    try {
      await deactivateListing({ id: String(listingId) }, { authorizeToken: session.data?.apiToken })
      router.refresh()
      router.back()
    } catch (e) {
      showErrorToast(String(e))
    }

    off()
  }

  return (
    <>
      <Button onClick={on} variant="text" color="secondary" sx={styles.triggerBtn}>
        {btnText}
      </Button>
      {isOpen ? (
        <ListingModal
          isOpen={isOpen}
          onClose={off}
          onSubmit={handleSubmit}
          submitBtnText={btnText}
          modalTitle={title}
          modalContent={text}
        />
      ) : null}
    </>
  )
}
