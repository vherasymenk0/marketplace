'use client'

import { Container, Stack } from '@mui/material'
import { useIntl } from 'react-intl'

import { SubcategoriesList } from '~/features/subcategories'

import { SubcategoryModel } from '~/entities/category'

import { Breadcrumbs } from '~/shared/components/base/Breadcrumbs'
import { Text } from '~/shared/components/base/Text'
import { Center } from '~/shared/components/common/Center'
import { EmptyState } from '~/shared/components/common/EmptyState'
import { useRouter } from '~/shared/hooks/useRouter'

interface Props {
  subcategories: SubcategoryModel[]
  category: string
}

export const CategoryView = ({ subcategories, category }: Props) => {
  const intl = useIntl()
  const router = useRouter()
  const isEmpty = subcategories.length === 0

  return (
    <Container sx={{ mt: { xs: 3, md: 4 }, mb: { xs: 12, md: 14 }, height: '100%' }}>
      <Breadcrumbs
        items={[
          { child: intl.formatMessage({ defaultMessage: 'Home', id: 'common.home' }), href: '/' },
          { child: category, href: '#' },
        ]}
      />

      {isEmpty ? (
        <Center>
          <EmptyState
            title={intl.formatMessage({
              defaultMessage: 'No Subcategories Found',
              id: 'categoryPage.emptyState.title',
            })}
            description={intl.formatMessage({
              defaultMessage:
                'Oops! It seems there are no subcategories within this category yet. Explore other parts or go back to the home page to discover more.',
              id: 'categoryPage.emptyState.description',
            })}
            action={{
              label: intl.formatMessage({
                defaultMessage: 'Go to Home Page',
                id: 'categoryPage.emptyState.action',
              }),
              onClick: () => router.push('/'),
            }}
          />
        </Center>
      ) : (
        <Stack
          sx={{ mt: 3, alignItems: { xs: 'flex-start', md: 'center' } }}
          gap={{ xs: 3, md: 4 }}
        >
          <Text variant="h5" color="grey.900">
            {category}
          </Text>

          <SubcategoriesList subcategories={subcategories} />
        </Stack>
      )}
    </Container>
  )
}
