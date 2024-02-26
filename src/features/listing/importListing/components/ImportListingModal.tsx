'use client'

import { BaseSyntheticEvent } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'

import { ListingModal } from '~/entities/listing'

import CheckIcon from '~/shared/assets/icons/thin-check-icon.svg'
import { Button } from '~/shared/components/base/Button'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { IconShape } from '~/shared/components/common/IconShape'
import { useBoolean } from '~/shared/hooks/useBoolean'
import { useRouter } from '~/shared/hooks/useRouter'

interface Props {
  isDisabled: boolean
  onSubmit: (e?: BaseSyntheticEvent) => Promise<void>
}

export const ImportListingModal = ({ isDisabled, onSubmit }: Props) => {
  const [isOpen, { off, on }] = useBoolean(false)
  const intl = useIntl()
  const router = useRouter()

  const title = intl.formatMessage({
    id: 'importListing.modal.title',
    defaultMessage: 'Your File Processing Was Initiated Successfully!',
  })

  const firstPartText = intl.formatMessage({
    id: 'importListing.modal.firstPartText',
    defaultMessage:
      'Great news! Your file has been successfully received, and the processing has begun.',
  })

  const secondPartText = intl.formatMessage({
    id: 'importListing.modal.secondPartText',
    defaultMessage:
      'Feel free to navigate away, as you will receive an email notification as soon as the importing process is completed.',
  })

  const cancelBtnText = intl.formatMessage({
    id: 'importListing.modal.btn.myListing',
    defaultMessage: 'My listings',
  })

  const submitBtnText = intl.formatMessage({
    id: 'importListing.modal.btn.import',
    defaultMessage: 'Import Another File',
  })

  const handleClose = () => {
    off()
    router.push('/vendor/my-listings')
  }

  const handleOpen = async () => {
    on()
    await onSubmit()
  }

  return (
    <>
      <Button
        sx={{ width: { xs: '100%', md: '164px' } }}
        disabled={isDisabled}
        onClick={handleOpen}
      >
        <FormattedMessage id="importListing.submitBtn" defaultMessage="Continue" />
      </Button>
      {isOpen ? (
        <ListingModal
          isOpen={isOpen}
          onClose={handleClose}
          onSubmit={off}
          submitBtnText={submitBtnText}
          cancelBtnText={cancelBtnText}
          icon={
            <IconShape>
              <SvgIcon size={32} icon={CheckIcon} stroke="primary.dark" />
            </IconShape>
          }
          modalTitle={title}
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
