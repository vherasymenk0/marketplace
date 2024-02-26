import { Stack } from '@mui/material'
import { FormattedMessage, FormattedNumber, useIntl } from 'react-intl'

import { CURRENCY_FORMAT_OPTIONS } from '~/features/currency'

import { DEFAULT_CURRENCY } from '~/entities/currency'
import { ListingModel } from '~/entities/listing'

import { Text } from '~/shared/components/base/Text'

type Props = Pick<ListingModel, 'price' | 'shippingCost' | 'title' | 'rating' | 'reviewCount'>

export const GeneralInfo = ({ price, shippingCost, title, rating: _, reviewCount: __ }: Props) => {
  const intl = useIntl()

  const formattedShippingPrice = intl.formatNumber(shippingCost, { ...CURRENCY_FORMAT_OPTIONS })

  return (
    <Stack gap={1.5}>
      <Text variant="subtitle2" color="grey.900">
        {title}
      </Text>
      <Stack gap={0.5}>
        <Text variant="subtitle2" color="primary.main">
          <FormattedNumber value={price[DEFAULT_CURRENCY]} {...CURRENCY_FORMAT_OPTIONS} />
        </Text>

        <Text variant="body5" color={({ palette }) => palette.grey[600]}>
          <FormattedMessage
            defaultMessage="Shipping cost: {formattedShippingPrice}"
            values={{ formattedShippingPrice }}
            id="listingCard.shippingCost"
          />
        </Text>
      </Stack>
      {/* TODO: uncomment when the rating feature will be available */}
      {/* {ratingCount ? ( */}
      {/*  <Stack direction="row" gap={1}> */}
      {/*    <Rating value={rating} readOnly /> */}

      {/*    <Text variant="body4">{reviewCount}</Text> */}
      {/*  </Stack> */}
      {/* ) : null} */}
    </Stack>
  )
}
