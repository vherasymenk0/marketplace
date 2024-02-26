import { Metadata } from 'next'

import { CategoryView } from '~/views/categoryView'

import { getSubcategory } from '~/entities/category'

import { ServerComponentProps } from '~/shared/types/nextjs'

type Props = ServerComponentProps<{ slug: string }>

const Page = async ({ params: { slug } }: Props) => {
  const { name, subcategories } = await getSubcategory(slug, { next: { revalidate: 60 } })

  return <CategoryView subcategories={subcategories} category={name} />
}

export const generateMetadata = async ({ params: { slug } }: Props): Promise<Metadata> => {
  const { name } = await getSubcategory(slug, { next: { revalidate: 60 } })

  return {
    title: name,
  }
}

export default Page
