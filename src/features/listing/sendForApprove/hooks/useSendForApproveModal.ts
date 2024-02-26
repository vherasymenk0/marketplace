'use client'

import { useIntl } from 'react-intl'

import { useBoolean } from '~/shared/hooks/useBoolean'
import { showErrorToast, showSuccessToast } from '~/shared/services/toastr'

interface Props {
  listingsCount: number
  isSendToApproveAvailable?: boolean
}

export const useBulkSendForApproveModal = ({
  listingsCount,
  isSendToApproveAvailable = true,
}: Props) => {
  const [isOpen, { off, on }] = useBoolean(false)
  const intl = useIntl()

  const submitBtnText = intl.formatMessage({
    id: 'approveListing.btn.submit',
    defaultMessage: 'Send to Approval',
  })

  const firstPartText = intl.formatMessage(
    {
      id: 'approveListing.text.firstPart',
      defaultMessage:
        'This action will send your {listingsCount, plural, one {listing} other {listings}} to Nextor specialist for review.',
    },
    { listingsCount },
  )

  const secondPartText = intl.formatMessage(
    {
      id: 'approveListing.text.secondPart',
      defaultMessage:
        'Please note that {listingsCount, plural, one {listing} other {listings}} without image(s) can not be sent for approval.',
    },
    { listingsCount },
  )

  const errorToastMessage = intl.formatMessage(
    {
      id: 'approveListing.text.secondPart',
      defaultMessage:
        'Your {listingsCount, plural, one {listing} other {listings}} does not have an image(s) and cannot be sent for approval. Please add an image to proceed.',
    },
    { listingsCount },
  )

  const successToastMessage = intl.formatMessage(
    {
      id: 'approveListing.text.secondPart',
      defaultMessage:
        'Success! Your {listingsCount, plural, one {listing} other {listings}} has been successfully submitted for approval.',
    },
    { listingsCount },
  )

  const handleSubmit = async (callback: () => Promise<void>) => {
    if (isSendToApproveAvailable) {
      try {
        await callback()
      } catch (e) {
        showErrorToast(String(e))
      }
      showSuccessToast(successToastMessage)
    } else {
      showErrorToast(errorToastMessage)
    }

    off()
  }

  return {
    isOpen,
    submitBtnText,
    firstPartText,
    secondPartText,
    handleOpen: on,
    handleClose: off,
    handleSubmit,
  }
}
