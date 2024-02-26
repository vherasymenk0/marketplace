import { notFound } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { ImportedDetails } from '~/views/importedDetails'

import { authConfig } from '~/entities/auth'
import { getImportedDetails } from '~/entities/import'

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
    data = await getImportedDetails(slug, {
      authorizeToken: session?.apiToken,
      params: searchParams,
    })
  } catch (_) {
    notFound()
  }

  const { meta, importedListings } = data

  return (
    <ImportedDetails
      importedListings={importedListings}
      pagesCount={meta.last}
      itemsCount={meta.count}
    />
  )
}

export default Page
