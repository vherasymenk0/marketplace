'use client'

import { ReactNode, useMemo } from 'react'

import { CategoryModel } from '~/entities/category'

import { contextFactory } from '~/shared/helpers/contextFactory'

interface ContextProps {
  categories: CategoryModel[]
}

const [useCategoriesContext, Context] = contextFactory<ContextProps>()

interface Props {
  categories: CategoryModel[]
  children: ReactNode
}

const CategoriesContext = ({ categories, children }: Props) => {
  const context = useMemo(
    () => ({
      categories,
    }),
    [categories],
  )

  return <Context.Provider value={context}>{children}</Context.Provider>
}

export { CategoriesContext, useCategoriesContext }
