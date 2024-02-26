'use client'

import { useSession } from 'next-auth/react'
import { FormattedMessage, useIntl } from 'react-intl'

import { ListingModal, sendListingForApproval } from '~/entities/listing'

import { Button } from '~/shared/components/base/Button'
import { useRouter } from '~/shared/hooks/useRouter'

import { useBulkSendForApproveModal } from '../hooks/useSendForApproveModal'

interface Props {
  id: number
  listingName: string
  isSendToApproveAvailable: boolean
}

export const SingleSendForApproveModal = ({ id, listingName, isSendToApproveAvailable }: Props) => {
  const {
    submitBtnText,
    firstPartText,
    secondPartText,
    isOpen,
    handleOpen,
    handleSubmit,
    handleClose,
  } = useBulkSendForApproveModal({ listingsCount: 1, isSendToApproveAvailable })
  const intl = useIntl()
  const session = useSession()
  const router = useRouter()

  const modalTitle = intl.formatMessage(
    {
      id: 'approveListing.single.title',
      defaultMessage: 'You are about to send: {listingName}',
    },
    { listingName },
  )

  const sendToApprove = async () => {
    await sendListingForApproval({ id: String(id) }, { authorizeToken: session.data?.apiToken })
    router.refresh()
  }

  const onSubmit = async () => handleSubmit(sendToApprove)

  return (
    <>
      <Button onClick={handleOpen} variant="outlined" size="medium">
        <FormattedMessage id="approveLisitng.single.sendBtn" defaultMessage="Send for Approval" />
      </Button>
      {isOpen ? (
        <ListingModal
          isOpen={isOpen}
          onClose={handleClose}
          onSubmit={onSubmit}
          submitBtnText={submitBtnText}
          modalTitle={modalTitle}
          modalContent={
            <>
              <p>{firstPartText}</p>
              <p>{secondPartText}</p>
            </>
          }
        />
      ) : null}
    </>
  )
}
