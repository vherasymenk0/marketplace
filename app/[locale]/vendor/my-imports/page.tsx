import { getServerSession } from 'next-auth'

import { MyImports } from '~/views/myImports'

import { authConfig } from '~/entities/auth'
import { MyImportsSearchParams, getImportListings } from '~/entities/import'

import { SEARCH_PARAMS } from '~/shared/constants/constants'

const Page = async ({ searchParams }: { searchParams: MyImportsSearchParams }) => {
  const session = await getServerSession(authConfig)
  const sortByStatus = searchParams?.sort_by_status
  const sortByDate = searchParams?.sort_by_created_at
  const hasSorting = sortByStatus ?? sortByDate

  const { meta, listingImports } = await getImportListings({
    authorizeToken: session?.apiToken,
    params: {
      ...searchParams,
      ...(!hasSorting && {
        [SEARCH_PARAMS.byCreatedAt]: 'desc',
      }),
    },
  })

  return (
    <MyImports listingImports={listingImports} itemsCount={meta.count} pagesCount={meta.last} />
  )
}

export default Page
