'use client'

import { useSession } from 'next-auth/react'
import { FormattedMessage, useIntl } from 'react-intl'

import { ListingModal, sendAllListingForApproval } from '~/entities/listing'

import { Button } from '~/shared/components/base/Button'
import { useRouter } from '~/shared/hooks/useRouter'

import { useBulkSendForApproveModal } from '../../hooks/useSendForApproveModal'

import { useStyles } from './BulkSendForApproveModal.styles'

interface Props {
  listingsCount: number
}

export const BulkSendForApproveModal = ({ listingsCount }: Props) => {
  const {
    submitBtnText,
    firstPartText,
    secondPartText,
    isOpen,
    handleOpen,
    handleClose,
    handleSubmit,
  } = useBulkSendForApproveModal({ listingsCount })
  const intl = useIntl()
  const session = useSession()
  const router = useRouter()
  const styles = useStyles()
  const isDisabled = listingsCount === 0

  const modalTitle = intl.formatMessage(
    {
      id: 'approveListing.title',
      defaultMessage:
        'You are about to send the following number of listings for approval: {listingsCount}',
    },
    { listingsCount },
  )

  const sendToApprove = async () => {
    await sendAllListingForApproval({ authorizeToken: session.data?.apiToken })
    router.refresh()
  }

  const onSubmit = async () => handleSubmit(sendToApprove)

  return (
    <>
      <Button
        onClick={handleOpen}
        disabled={isDisabled}
        variant="outlined"
        size="medium"
        sx={styles.triggerBtn}
      >
        <FormattedMessage id="approveLisitng.sendBtn" defaultMessage="Send All for Approval" />
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
