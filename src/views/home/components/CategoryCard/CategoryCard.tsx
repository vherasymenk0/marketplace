import { Stack } from '@mui/material'
import Image from 'next/image'
import { FormattedMessage } from 'react-intl'

import { CategoryModel } from '~/entities/category'

import ArrowRight from '~/shared/assets/icons/arrow-right.svg'
import { NextLink } from '~/shared/components/base/NextLink'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'
import { BasicCard } from '~/shared/components/cards/BasicCard'
import { CardImageContainer } from '~/shared/components/common/CardImageContainer'
import { EmptyImage } from '~/shared/components/common/EmptyImage'

import { useStyles } from './CategoryCard.styles'

interface Props {
  category: CategoryModel
}

export const CategoryCard = ({ category }: Props) => {
  const styles = useStyles()
  const { subcategories, logo, name: categoryName, slug } = category

  const showAllButton = subcategories.length > 3
  const firstThreeSubcategories = subcategories.slice(0, 3)

  return (
    <BasicCard sx={styles.container}>
      <NextLink href={`/categories/${slug}`} noLinkStyle>
        <Stack direction="row" gap={3}>
          <CardImageContainer height={154} width={160} minWidth={160}>
            {logo ? (
              <Image
                alt={categoryName}
                src={logo?.imageUrl ?? ''}
                sizes="240px"
                width={160}
                height={154}
                style={{
                  objectFit: 'cover',
                }}
              />
            ) : (
              <EmptyImage />
            )}
          </CardImageContainer>

          <Stack gap={1.5}>
            <Text variant="subtitle3" color="grey.900" sx={{ wordBreak: 'break-word' }}>
              {categoryName}
            </Text>

            <Stack gap={1}>
              {firstThreeSubcategories.map(({ name }) => (
                <Text key={name} variant="body4" color="grey.600" lineClamp={1}>
                  {name}
                </Text>
              ))}

              {showAllButton ? (
                <Stack direction="row" alignItems="center">
                  <Text variant="subtitle4" color="primary.main">
                    <FormattedMessage
                      defaultMessage="Show more"
                      id="listingCard.accordion.showMore"
                    />
                  </Text>

                  <SvgIcon icon={ArrowRight} size={24} color="primary.main" />
                </Stack>
              ) : null}
            </Stack>
          </Stack>
        </Stack>
      </NextLink>
    </BasicCard>
  )
}
