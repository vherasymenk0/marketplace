import { Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import { CSSHide } from '~/shared/components/base/CSSHide'
import { Text } from '~/shared/components/base/Text'

import { CategoriesListDesktop } from './CategoriesListDesktop'
import { CategoriesListMobile } from './CategoriesListMobile'

export const CategoriesSection = () => {
  return (
    <Stack gap={4} mt={{ xs: 7, md: 10 }}>
      <Text variant="h6" color="grey.900">
        <FormattedMessage
          defaultMessage="Search by Categories"
          id="homePage.categoriesSection.title"
        />
      </Text>

      <CSSHide screen="mobile">
        <CategoriesListDesktop />
      </CSSHide>

      <CSSHide screen="desktop">
        <CategoriesListMobile />
      </CSSHide>
    </Stack>
  )
}
