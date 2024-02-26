import { api } from '~/shared/services/api'
import { FlatRequestOptions } from '~/shared/services/fetch'

import { CategoriesSchemaResponse, CategorySchemaResponse } from './model/categories'

export const getCategories = async (options?: FlatRequestOptions) => {
  const response = await api.get('api/v1/categories', options)

  const { categories } = CategoriesSchemaResponse.parse(response)

  return categories
}

export const getSubcategory = async (slug: string, options?: FlatRequestOptions) => {
  const response = await api.get(`/api/v1/categories/${slug}`, options)

  const { category } = CategorySchemaResponse.parse(response)

  return category
}
