import { List, ListItem, Stack } from '@mui/material'
import Popover from '@mui/material/Popover'
import { MouseEvent, useState } from 'react'
import { FormattedMessage } from 'react-intl'

import ArrowIcon from '~/shared/assets/icons/arrow-right.svg'
import { Button } from '~/shared/components/base/Button'
import { InlineTextButton } from '~/shared/components/base/InlineTextButton'
import { NextLink } from '~/shared/components/base/NextLink'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'

import { useCategoriesContext } from '../../lib/context'

import { useStyles } from './CatalogPopover.styles'

export const CatalogPopover = () => {
  const { categories } = useCategoriesContext()
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const styles = useStyles()

  const onOpenCatalog = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const onCloseCatalog = () => {
    setAnchorEl(null)
    setActiveCategory(categories[0])
  }

  return (
    <>
      <Button
        aria-selected={!!anchorEl}
        color="primary"
        variant="text"
        onClick={onOpenCatalog}
        sx={styles.trigger}
      >
        <FormattedMessage id="mobileMenu.catalog.btn" defaultMessage="Catalog" />
      </Button>

      <Popover
        open={!!anchorEl}
        sx={styles.popover}
        onClose={onCloseCatalog}
        onClick={(e) => e.stopPropagation()}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <>
          <List sx={styles.categoryMenu}>
            {categories.map((category) => {
              const isActiveCategory = activeCategory?.id === category.id

              return (
                <ListItem
                  key={category.slug}
                  onMouseEnter={() => setActiveCategory(category)}
                  className={isActiveCategory ? 'active' : ''}
                >
                  <InlineTextButton
                    href={`/categories/${category.slug}`}
                    endIcon={<SvgIcon icon={ArrowIcon} size={32} />}
                  >
                    <Text variant="subtitle3" lineClamp={2}>
                      {category.name}
                    </Text>
                  </InlineTextButton>
                </ListItem>
              )
            })}
          </List>
          <Stack sx={styles.subcategoryMenu} className={activeCategory ? 'active' : ''}>
            <Text variant="subtitle3" mb={4} color="grey.900">
              {activeCategory?.name}
            </Text>
            <List>
              {activeCategory?.subcategories.map((subcategory) => (
                <ListItem key={subcategory.slug}>
                  <NextLink href={`/categories/${activeCategory.id}/${subcategory.slug}`}>
                    <Text variant="body4" lineClamp={2} sx={{ wordBreak: 'normal' }}>
                      {subcategory.name}
                    </Text>
                  </NextLink>
                </ListItem>
              ))}
            </List>
          </Stack>
        </>
      </Popover>
    </>
  )
}
