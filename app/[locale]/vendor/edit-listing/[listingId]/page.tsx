import { notFound, redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { EditListing } from '~/views/editListing'

import { authConfig } from '~/entities/auth'
import { LISTING_STATUSES, getVendorListingById } from '~/entities/listing'

import { ServerComponentProps } from '~/shared/types/nextjs'

type Props = ServerComponentProps<{ listingId: string }>

const Page = async ({ params: { listingId } }: Props) => {
  const session = await getServerSession(authConfig)
  let listing

  try {
    listing = await getVendorListingById(listingId, { authorizeToken: session?.apiToken })
  } catch (_) {
    notFound()
  }

  if (listing.status === LISTING_STATUSES.pending) redirect('/vendor/my-listings')

  return <EditListing listing={listing} />
}

export default Page
