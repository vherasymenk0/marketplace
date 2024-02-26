import { Stack } from '@mui/material'
import Image from 'next/image'
import { FormattedMessage, FormattedNumber, useIntl } from 'react-intl'

import { ApproximateValue, CURRENCY_FORMAT_OPTIONS } from '~/features/currency'
import { AddToCart } from '~/features/listing/addToCart'

import { DEFAULT_CURRENCY } from '~/entities/currency'
import { ListingModel } from '~/entities/listing'

import { NextLink } from '~/shared/components/base/NextLink'
import { Text } from '~/shared/components/base/Text'
import { BasicCard } from '~/shared/components/cards/BasicCard'
import { CardImageContainer } from '~/shared/components/common/CardImageContainer'

import { useStyles } from './ListingCard.styles'

interface Props {
  image: string
  title: ListingModel['title']
  price: ListingModel['price']
  shippingCost: ListingModel['shippingCost']
  slug: ListingModel['slug']
  id: ListingModel['id']
}

export const ListingCard = ({ image, title, price, shippingCost, slug, id }: Props) => {
  const styles = useStyles()
  const intl = useIntl()

  const formattedShippingCost = intl.formatNumber(shippingCost, { ...CURRENCY_FORMAT_OPTIONS })

  return (
    <BasicCard sx={styles.container}>
      <NextLink href={`/listing/${slug}`} noLinkStyle>
        <Stack gap={3} justifyContent="space-between" height="100%">
          <Stack gap={2}>
            <CardImageContainer height={240} width="100%">
              <Image
                alt={title}
                src={image}
                sizes="240px"
                style={{
                  objectFit: 'cover',
                }}
                fill
              />
            </CardImageContainer>

            <Text variant="subtitle4" color="grey.900" lineClamp={2}>
              {title}
            </Text>

            <Stack gap={0.5}>
              <Text variant="subtitle1" color="primary.main">
                <FormattedNumber value={price[DEFAULT_CURRENCY]} {...CURRENCY_FORMAT_OPTIONS} />
              </Text>

              <ApproximateValue price={price} variant="body5" width="max-content" />

              <Text variant="body5" color="grey.600">
                <FormattedMessage
                  defaultMessage="Shipping cost: {value}"
                  id="homePage.listingCard.shippingCost"
                  values={{
                    value: formattedShippingCost,
                  }}
                />
              </Text>
            </Stack>
          </Stack>

          <AddToCart
            id={id}
            withCounter={false}
            buttonProps={{ size: 'medium', fullWidth: true }}
          />
        </Stack>
      </NextLink>
    </BasicCard>
  )
}
