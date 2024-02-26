import { Box, Stack } from '@mui/material'

import { LISTING_STATUSES, ListingModel } from '~/entities/listing'

import { CSSHide } from '~/shared/components/base/CSSHide'
import { Text } from '~/shared/components/base/Text'
import { BasicCard } from '~/shared/components/cards/BasicCard'

import { AdditionalInfo } from './components/AdditionalInfo'
import { CardLinkWrapper } from './components/CardLinkWrapper'
import { GeneralInfo } from './components/GeneralInfo'
import { ListingActions } from './components/ListingActions'
import { ListingCardAccordion } from './components/ListingCardAccordion'
import { ListingImage } from './components/ListingImage'
import { useStyles } from './ListingCard.styles'

interface Props extends Omit<ListingModel, 'subcategory' | 'listingImages' | 'partAttributes'> {
  subcategory: string
  category: string
  imageSrc?: string
}

export const ListingCard = ({
  id,
  slug,
  title,
  price,
  shippingCost,
  rating,
  reviewCount,
  subcategory,
  category,
  status,
  imageSrc,
  ...rest
}: Props) => {
  const isActive = status === LISTING_STATUSES.active || status === LISTING_STATUSES.deactivated
  const styles = useStyles({ isActive })

  return (
    <CardLinkWrapper href={`/listing/${slug}`} disabled={!isActive}>
      <BasicCard sx={styles.container}>
        <Stack gap={3} flexDirection={{ xs: 'column', md: 'row' }}>
          <ListingImage src={imageSrc} />

          <Box sx={styles.content}>
            <Text variant="body5" color="grey.600" sx={styles.label}>
              {`${category} > ${subcategory}`}
            </Text>
            <Stack gap={{ xs: 3, md: 2 }}>
              <GeneralInfo
                price={price}
                shippingCost={shippingCost}
                rating={rating}
                reviewCount={reviewCount}
                title={title}
              />

              <CSSHide screen="desktop">
                <ListingCardAccordion {...rest} />
              </CSSHide>

              <CSSHide screen="mobile">
                <AdditionalInfo {...rest} />
              </CSSHide>
            </Stack>

            <Stack sx={styles.actions}>
              <ListingActions status={status} title={title} imageSrc={imageSrc} id={id} />
            </Stack>
          </Box>
        </Stack>
      </BasicCard>
    </CardLinkWrapper>
  )
}
