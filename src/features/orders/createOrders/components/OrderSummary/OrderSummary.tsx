import { Divider, Paper, Stack } from '@mui/material'
import { FormattedMessage, FormattedNumber } from 'react-intl'

import { ApproximateValue, CURRENCY_FORMAT_OPTIONS } from '~/features/currency'

import { DEFAULT_CURRENCY } from '~/entities/currency'
import { CheckoutOrderSummaryModel } from '~/entities/orders'

import LockIcon from '~/shared/assets/icons/lock-icon.svg'
import { Button } from '~/shared/components/base/Button'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'

import { OrderSummaryItem } from '../OrderSummaryItem'

import { useStyles } from './OrderSummary.styles'

interface Props {
  data: CheckoutOrderSummaryModel
  onSubmit: () => void
}

export const OrderSummary = ({ data: { total, items }, onSubmit }: Props) => {
  const styles = useStyles()

  return (
    <Stack sx={styles.root}>
      <Paper sx={styles.paper}>
        <Text variant="h6" color="primary.main">
          <FormattedMessage id="checkout.orderSummary.title" defaultMessage="Order Summary" />
        </Text>
        <Divider sx={styles.divider} />
        <Stack mb={3}>
          {items.map(({ shipping_cost, cost }, idx) => {
            const orderNumber = idx + 1
            const key = orderNumber + cost

            return (
              <OrderSummaryItem
                key={key}
                shippingCost={shipping_cost}
                cost={cost}
                orderNumber={orderNumber}
                sx={styles.divider}
              />
            )
          })}

          <Stack gap={1}>
            <Stack flexDirection="row" justifyContent="space-between">
              <Text variant="subtitle2" color="grey.900">
                <FormattedMessage id="checkout.orderSummary.total" defaultMessage="Total" />
              </Text>
              <Text variant="subtitle2" color="grey.900">
                <FormattedNumber value={total[DEFAULT_CURRENCY]} {...CURRENCY_FORMAT_OPTIONS} />
              </Text>
            </Stack>

            <ApproximateValue price={total} />
          </Stack>
        </Stack>

        <Button fullWidth onClick={onSubmit}>
          <FormattedMessage id="checkout.orderSummary.payNow" defaultMessage="Pay Now" />
        </Button>
      </Paper>

      <Stack flexDirection="row" alignItems="center" mt={1}>
        <SvgIcon icon={LockIcon} stroke="primary.main" />
        <Text variant="subtitle4" color="primary.main">
          <FormattedMessage
            id="checkout.orderSummary.transactionInfo"
            defaultMessage="Your transaction is secured with SSL encryption"
          />
        </Text>
      </Stack>
    </Stack>
  )
}
