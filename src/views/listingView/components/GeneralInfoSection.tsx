import { Box, Divider, Stack } from '@mui/material'
import { FormattedMessage, FormattedNumber, useIntl } from 'react-intl'

import { ApproximateValue, CURRENCY_FORMAT_OPTIONS } from '~/features/currency'
import { AddToCart } from '~/features/listing/addToCart'

import { DEFAULT_CURRENCY } from '~/entities/currency'
import { ListingModel } from '~/entities/listing'

import { Text } from '~/shared/components/base/Text'
import { CopyLink } from '~/shared/components/common/CopyLink'
import { capitalize } from '~/shared/helpers/capitalize'

import { DeactivatedMessage } from './DeactivatedMessage'
import { ListingInfo } from './ListingInfo'

type Props = Pick<
  ListingModel,
  | 'title'
  | 'vendor'
  | 'partNumber'
  | 'brand'
  | 'partType'
  | 'price'
  | 'shippingCost'
  | 'originCountry'
  | 'id'
  | 'status'
>

export const GeneralInfoSection = ({
  title,
  vendor,
  partNumber,
  brand,
  partType,
  price,
  shippingCost,
  originCountry,
  id,
  status,
}: Props) => {
  const intl = useIntl()
  const isDeactivated = status === 'deactivated'
  const formattedShippingCost = intl.formatNumber(shippingCost, { ...CURRENCY_FORMAT_OPTIONS })

  return (
    <Stack gap={2}>
      <Text variant="h5" color="grey.900">
        {title}
      </Text>

      <Box>
        <ListingInfo
          label={intl.formatMessage({
            id: 'listingPage.vendor.label',
            defaultMessage: 'Vendor',
          })}
          data={vendor?.companyName ?? ''}
        />

        <Divider sx={{ my: { xs: 1.5, md: 2 } }} />

        <Stack gap={{ xs: 1, md: 2 }}>
          <ListingInfo
            label={intl.formatMessage({
              id: 'listingPage.partNumber.label',
              defaultMessage: 'Part number',
            })}
            data={partNumber}
          />

          <ListingInfo
            label={intl.formatMessage({
              id: 'listingPage.brand.label',
              defaultMessage: 'Brand of the part',
            })}
            data={brand}
          />

          <ListingInfo
            label={intl.formatMessage({
              id: 'listingPage.partType.label',
              defaultMessage: 'Part type',
            })}
            data={capitalize(partType)}
          />

          <ListingInfo
            label={intl.formatMessage({
              id: 'listingPage.originCountry.label',
              defaultMessage: 'Country of Origin:',
            })}
            data={originCountry}
          />
        </Stack>

        <Divider sx={{ mt: { xs: 1.5, md: 2 } }} />
      </Box>

      <Stack gap={2}>
        <Stack gap={0.5}>
          <Text variant="h5" color="primary.main">
            <FormattedNumber
              value={price[DEFAULT_CURRENCY]}
              style="currency"
              currency={DEFAULT_CURRENCY}
              useGrouping={false}
            />
          </Text>

          <ApproximateValue price={price} width="max-content" shortLabel />

          <Text variant="body4" color="grey.600">
            <FormattedMessage
              defaultMessage="Shipping cost: {value}"
              id="listingPage.shippingCost"
              values={{ value: formattedShippingCost }}
            />
          </Text>
        </Stack>

        {isDeactivated ? (
          <DeactivatedMessage />
        ) : (
          <AddToCart id={id} buttonProps={{ sx: { width: { xs: '100%', md: 279 } } }} />
        )}

        <CopyLink />
      </Stack>
    </Stack>
  )
}
