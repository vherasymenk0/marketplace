import { getServerSession } from 'next-auth'
import { PropsWithChildren } from 'react'

import { ImportDetailsLayout } from 'src/widgets/layouts/importDetails'

import { authConfig } from '~/entities/auth'
import { getImportListingBySlug } from '~/entities/import'

interface Props extends PropsWithChildren {
  params: {
    slug: string
  }
}

const Layout = async ({ children, params: { slug } }: Props) => {
  const session = await getServerSession(authConfig)
  const data = await getImportListingBySlug(slug, {
    authorizeToken: session?.apiToken,
  })

  const { filename, createdAt, importedCount, failedCount } = data.listingImport
  const itemsCount = failedCount + importedCount

  return (
    <ImportDetailsLayout
      fileName={filename}
      date={createdAt}
      itemsCount={itemsCount}
      failedCount={failedCount}
      importedCount={importedCount}
    >
      {children}
    </ImportDetailsLayout>
  )
}

export default Layout
