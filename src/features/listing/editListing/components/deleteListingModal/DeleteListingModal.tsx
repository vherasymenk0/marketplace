'use client'

import { useSession } from 'next-auth/react'
import { useIntl } from 'react-intl'

import { ListingModal, deleteListing } from '~/entities/listing'

import { Button } from '~/shared/components/base/Button'
import { useBoolean } from '~/shared/hooks/useBoolean'
import { useRouter } from '~/shared/hooks/useRouter'
import { showErrorToast } from '~/shared/services/toastr'

import { useStyles } from './DeleteListingModal.styles'

interface Props {
  listingName: string
  listingId: number
}

export const DeleteListingModal = ({ listingName, listingId }: Props) => {
  const [isOpen, { off, on }] = useBoolean(false)
  const session = useSession()
  const router = useRouter()
  const intl = useIntl()
  const styles = useStyles()

  const btnText = intl.formatMessage({ id: 'deleteListing.deleteBtn', defaultMessage: 'Delete' })

  const title = intl.formatMessage(
    {
      id: 'deleteListing.title',
      defaultMessage: 'You are about to delete the following listing: {listingName}',
    },
    { listingName },
  )

  const text = intl.formatMessage({
    id: 'deleteListing.text',
    defaultMessage:
      'This action will completely delete the listing from the Nextor marketplace. Please confirm that you want to proceed with the deletion process.',
  })

  const handleSubmit = async () => {
    try {
      await deleteListing({ id: String(listingId) }, { authorizeToken: session.data?.apiToken })
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
