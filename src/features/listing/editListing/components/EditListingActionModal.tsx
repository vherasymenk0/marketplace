import { LISTING_STATUSES, ListingModel } from '~/entities/listing'

import { DeactivateListingModal } from './DeactivateListingModal'
import { DeleteListingModal } from './deleteListingModal'

interface Props {
  listingStatus: ListingModel['status']
  listingTitle: ListingModel['title']
  listingId: ListingModel['id']
  isOrdered?: ListingModel['ordered']
}

export const EditListingActionModal = ({
  listingStatus,
  isOrdered = false,
  listingTitle,
  listingId,
}: Props) => {
  const isActiveStatus = listingStatus === LISTING_STATUSES.active
  const isDraftStatus = listingStatus === LISTING_STATUSES.draft

  if (isActiveStatus) {
    if (isOrdered)
      return <DeactivateListingModal listingName={listingTitle} listingId={listingId} />
    return <DeleteListingModal listingName={listingTitle} listingId={listingId} />
  }

  if (isDraftStatus) return <DeleteListingModal listingName={listingTitle} listingId={listingId} />

  return null
}
