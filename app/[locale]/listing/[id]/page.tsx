import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ListingView } from '~/views/listingView'

import { getListing } from '~/entities/listing'

import { ServerComponentProps } from '~/shared/types/nextjs'

type Props = ServerComponentProps<{ id: string }>

const Page = async ({ params: { id } }: Props) => {
  let listing

  try {
    listing = await getListing(id, { next: { revalidate: 60 } })
  } catch (_) {
    notFound()
  }

  return <ListingView listing={listing} />
}

export const generateMetadata = async ({ params: { id } }: Props): Promise<Metadata> => {
  const listing = await getListing(id, { next: { revalidate: 60 } })

  return {
    title: listing.title,
    description: listing.description,
    openGraph: {
      images: listing.listingImages.map((image) => ({ url: image.imageUrl })),
    },
  }
}

export default Page
