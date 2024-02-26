import { Grid } from '@mui/material'

import { useCategoriesContext } from '~/widgets/layouts/main'

import { CategoryCard } from '../../CategoryCard'

export const CategoriesListDesktop = () => {
  const { categories } = useCategoriesContext()

  return (
    <Grid container spacing={3}>
      {categories.map((category) => (
        <Grid item xs={12} md={4} key={category.id}>
          <CategoryCard category={category} />
        </Grid>
      ))}
    </Grid>
  )
}
