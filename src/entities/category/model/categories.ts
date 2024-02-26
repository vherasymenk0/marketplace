import { z } from 'zod'

export const BaseCategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  logo: z
    .object({
      id: z.number(),
      imageUrl: z.string(),
    })
    .nullable()
    .optional(),
})

const CategorySchema = BaseCategorySchema.extend({
  subcategories: z.array(BaseCategorySchema.omit({ logo: true })),
})

export const CategorySchemaResponse = z.object({
  category: CategorySchema,
})

export const CategoriesSchemaResponse = z.object({
  categories: z.array(CategorySchema),
})

export type CategoryModel = z.infer<typeof CategorySchema>
export type SubcategoryModel = z.infer<typeof BaseCategorySchema>
