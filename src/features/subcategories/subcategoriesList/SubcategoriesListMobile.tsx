import { Stack } from '@mui/material'

import { SubcategoryModel } from '~/entities/category'

import { NextLink } from '~/shared/components/base/NextLink'
import { Text } from '~/shared/components/base/Text'

interface Props {
  subcategories: SubcategoryModel[]
}

export const SubcategoriesListMobile = ({ subcategories }: Props) => {
  return (
    <Stack gap={2}>
      {subcategories.map((item) => (
        <NextLink href={item.name} key={item.name}>
          <Text variant="subtitle4" color="grey.900">
            {item.name}
          </Text>
        </NextLink>
      ))}
    </Stack>
  )
}
