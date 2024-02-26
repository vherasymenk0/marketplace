import { getServerSession } from 'next-auth'

import { MyOrdersBuyer } from '~/views/myOrdersBuyer'

import { authConfig } from '~/entities/auth'
import { getBuyerOrders } from '~/entities/orders'

import { SEARCH_PARAMS } from '~/shared/constants/constants'
import { QueryParams } from '~/shared/types/search'

interface MyOrdersSearchParams extends QueryParams {
  sort_by_created_at?: string
}

const Page = async ({ searchParams }: { searchParams: MyOrdersSearchParams }) => {
  const session = await getServerSession(authConfig)

  const sortByCreatedAt = searchParams?.sort_by_created_at

  const params = {
    ...searchParams,
    ...(!sortByCreatedAt && {
      [SEARCH_PARAMS.byCreatedAt]: 'asc',
    }),
  }

  const { orders, meta } = await getBuyerOrders({
    authorizeToken: session?.apiToken,
    params,
  })

  return <MyOrdersBuyer orders={orders} pagesCount={meta.last} itemsCount={meta.count} />
}

export default Page
