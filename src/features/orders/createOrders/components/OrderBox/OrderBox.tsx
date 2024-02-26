import { Paper } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import { CheckoutOrderItemModel } from '~/entities/orders'

import { Text } from '~/shared/components/base/Text'

import { OrderItem } from '../OrderItem'

import { useStyles } from './OrderBox.styles'

interface Props {
  orderNumber: number
  orders: CheckoutOrderItemModel[]
}

export const OrderBox = ({ orderNumber, orders }: Props) => {
  const styles = useStyles()

  return (
    <Paper sx={styles.root}>
      <Text variant="h6" color="primary.main">
        <FormattedMessage
          id="checkout.orderItem.order"
          defaultMessage="Order {orderNumber}"
          values={{ orderNumber }}
        />
      </Text>
      {orders.map((order) => (
        <OrderItem key={`${order.slug}-${order.vendorName}`} {...order} />
      ))}
    </Paper>
  )
}
