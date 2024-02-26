import { Fade, List, ListItem, Stack } from '@mui/material'
import { useLayoutEffect, useState } from 'react'
import { useIntl } from 'react-intl'

import { CategoryModel } from '~/entities/category'

import ArrowIcon from '~/shared/assets/icons/arrow-right.svg'
import CatalogIcon from '~/shared/assets/icons/catalog.svg'
import { InlineTextButton } from '~/shared/components/base/InlineTextButton'
import { NextLink } from '~/shared/components/base/NextLink'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'

import { useCategoriesContext, useSidebarContext } from '../../lib/context'
import { SidebarItem } from '../SidebarItem'

import { useStyles } from './CatalogMenu.styles'

export const CatalogMenu = ({ isAuth }: { isAuth: boolean }) => {
  const { isOpen: isSidebarOpen } = useSidebarContext()
  const { categories } = useCategoriesContext()
  const [isOpenCatalog, setIsOpenCatalog] = useState(false)
  const [activeCategory, setActiveCategory] = useState<CategoryModel | null>(null)
  const intl = useIntl()
  const styles = useStyles()
  const catalogBtnText = intl.formatMessage({
    id: 'mobileMenu.catalog.btn',
    defaultMessage: 'Catalog',
  })

  const handeOpenCatalog = () => {
    setIsOpenCatalog(true)
  }

  const handleCloseCatalog = () => {
    if (activeCategory) {
      setActiveCategory(null)
    } else {
      setIsOpenCatalog(false)
    }
  }

  useLayoutEffect(() => {
    return () => {
      setIsOpenCatalog(false)
      setActiveCategory(null)
    }
  }, [isSidebarOpen])

  return (
    <>
      <SidebarItem
        onClick={handeOpenCatalog}
        icon={CatalogIcon}
        title={catalogBtnText}
        sx={{ order: isAuth ? 0 : 1 }}
      />
      <Fade in={isOpenCatalog}>
        <Stack sx={styles.wrapper}>
          <InlineTextButton
            onClick={handleCloseCatalog}
            startIcon={<SvgIcon size={32} icon={ArrowIcon} />}
            sx={styles.backBtn}
          >
            {catalogBtnText}
          </InlineTextButton>
          <Stack sx={styles.listsWrapper}>
            <List sx={styles.categoryList}>
              {categories.map((category) => (
                <ListItem
                  key={category.slug}
                  onClick={() => setActiveCategory(category)}
                  sx={styles.categoryItem}
                >
                  <InlineTextButton endIcon={<SvgIcon icon={ArrowIcon} size={32} />}>
                    <Text variant="subtitle3" lineClamp={2}>
                      {category.name}
                    </Text>
                  </InlineTextButton>
                </ListItem>
              ))}
            </List>
            <Stack sx={styles.subcategoryList} className={activeCategory?.id ? 'active' : ''}>
              <Text variant="subtitle3" mb={3} mt={1}>
                {activeCategory?.name}
              </Text>
              <List>
                {activeCategory?.subcategories.map((subcategory) => (
                  <ListItem key={subcategory.slug}>
                    <NextLink
                      href={`/${activeCategory.slug}/${subcategory.slug}`}
                      key={subcategory.slug}
                    >
                      <Text variant="body4" lineClamp={2}>
                        {subcategory.name}
                      </Text>
                    </NextLink>
                  </ListItem>
                ))}
              </List>
            </Stack>
          </Stack>
        </Stack>
      </Fade>
    </>
  )
}
