import { SingleSendForApproveModal } from '~/features/listing/sendForApprove'

import { LISTING_STATUSES, ListingModel } from '~/entities/listing'

import { ActivateButton } from './ActivateButton'
import { EditButton } from './EditButton'

interface Props extends Pick<ListingModel, 'status' | 'title' | 'id'> {
  imageSrc?: string
}

export const ListingActions = ({ id, status, title, imageSrc }: Props) => {
  if (status === LISTING_STATUSES.active) return <EditButton id={id} />

  if (status === LISTING_STATUSES.draft)
    return (
      <>
        <EditButton id={id} />
        <SingleSendForApproveModal
          listingName={title}
          isSendToApproveAvailable={!!imageSrc}
          id={id}
        />
      </>
    )

  if (status === LISTING_STATUSES.deactivated)
    return (
      <>
        <EditButton id={id} />
        <ActivateButton id={id} />
      </>
    )

  return null
}
