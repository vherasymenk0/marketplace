import { ListingModel } from '../model/listing'

export const getMainListingImage = (images: ListingModel['listingImages']) => {
  return images.find((item) => item.position === 0)?.imageUrl ?? ''
}
