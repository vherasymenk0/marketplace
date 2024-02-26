import { getServerSession } from 'next-auth'

import { MyListings } from '~/views/myListings'

import { authConfig } from '~/entities/auth'
import { LISTING_STATUSES, MyListingsSearchParams, getListings } from '~/entities/listing'

import { SEARCH_PARAMS } from '~/shared/constants/constants'

const Page = async ({ searchParams }: { searchParams: MyListingsSearchParams }) => {
  const session = await getServerSession(authConfig)
  const listingStatus = searchParams?.filter_by_status ?? LISTING_STATUSES.active
  const sortByPrice = searchParams?.sort_by_price
  const sortByCreatedAt = searchParams?.sort_by_created_at

  const isSorting = sortByPrice ?? sortByCreatedAt

  const params = {
    ...searchParams,
    [SEARCH_PARAMS.byStatus]: listingStatus,
    ...(!isSorting && {
      [SEARCH_PARAMS.byCreatedAt]: 'asc',
    }),
  }

  const { listings, meta } = await getListings({
    authorizeToken: session?.apiToken,
    params,
  })

  return <MyListings listings={listings} itemsCount={meta.count} pagesCount={meta.last} />
}

export default Page
