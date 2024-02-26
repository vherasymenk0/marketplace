import { notFound } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { FailedDetails } from '~/views/failedDetails'

import { authConfig } from '~/entities/auth'
import { getFailedDetails } from '~/entities/import'

import { QueryParams } from '~/shared/types/search'

interface Props {
  params: {
    slug: string
  }
  searchParams: QueryParams
}

const Page = async ({ params, searchParams }: Props) => {
  const { slug } = params
  const session = await getServerSession(authConfig)
  let data

  try {
    data = await getFailedDetails(slug, {
      authorizeToken: session?.apiToken,
      params: searchParams,
    })
  } catch (_) {
    notFound()
  }

  const { meta, failedListings } = data

  return (
    <FailedDetails failedListings={failedListings} pagesCount={meta.last} itemsCount={meta.count} />
  )
}

export default Page
