import { Divider, Stack, SxProps } from '@mui/material'
import { FormattedMessage, FormattedNumber } from 'react-intl'

import { CURRENCY_FORMAT_OPTIONS } from '~/features/currency'

import { Text } from '~/shared/components/base/Text'

interface Props {
  orderNumber: number
  cost: number
  shippingCost: number
  sx?: SxProps
}

export const OrderSummaryItem = ({ orderNumber, cost, shippingCost, sx }: Props) => {
  return (
    <>
      <Stack gap={2}>
        <Stack flexDirection="row" justifyContent="space-between">
          <Text variant="subtitle3" color="grey.900">
            <FormattedMessage
              id="checkout.orderSummary.order"
              defaultMessage="Order {orderNumber}"
              values={{ orderNumber }}
            />
          </Text>
          <Text variant="subtitle3" color="grey.900">
            <FormattedNumber value={cost} {...CURRENCY_FORMAT_OPTIONS} />
          </Text>
        </Stack>
        <Stack flexDirection="row" justifyContent="space-between">
          <Text variant="subtitle3" color="grey.900">
            <FormattedMessage id="checkout.orderSummary.shipping" defaultMessage="Shipping" />
          </Text>
          <Text variant="subtitle3" color="grey.900">
            <FormattedNumber value={shippingCost} {...CURRENCY_FORMAT_OPTIONS} />
          </Text>
        </Stack>
      </Stack>
      <Divider sx={sx} />
    </>
  )
}
