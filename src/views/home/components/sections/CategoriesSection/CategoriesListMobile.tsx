import { Grid } from '@mui/material'

import { useCategoriesContext } from '~/widgets/layouts/main'

import { CategoryCard } from '../../CategoryCard'
import { ShowAllAccordion } from '../../ShowAllAccordion'

export const CategoriesListMobile = () => {
  const { categories } = useCategoriesContext()

  const showedCategories = categories.slice(0, 4)

  return (
    <Grid container spacing={3}>
      {showedCategories.map((category) => (
        <Grid item xs={12} md={4} key={category.id}>
          <CategoryCard category={category} />
        </Grid>
      ))}

      <ShowAllAccordion>
        {categories.slice(4, categories.length).map((category) => (
          <Grid item xs={12} md={4} key={category.id}>
            <CategoryCard category={category} />
          </Grid>
        ))}
      </ShowAllAccordion>
    </Grid>
  )
}
