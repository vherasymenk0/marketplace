import { Stack, useTheme } from '@mui/material'
import { useIntl } from 'react-intl'

import { CURRENCY_FORMAT_OPTIONS } from '~/features/currency'

import { capitalize } from '~/shared/helpers/capitalize'
import { getFormattedDate } from '~/shared/helpers/getFormattedDate'

import { OrderModel } from '../../model/order'

import { OrderInfo } from './OrderInfo'

type Props = Omit<OrderModel, 'orderItems' | 'vendor'>

export const MainInformation = ({
  id,
  createdAt,
  totalPrice,
  totalShippingCost,
  status,
}: Props) => {
  const intl = useIntl()
  const { palette } = useTheme()
  const formattedTotal = intl.formatNumber(totalPrice, { ...CURRENCY_FORMAT_OPTIONS })
  const formattedShippingCost = intl.formatNumber(totalShippingCost, { ...CURRENCY_FORMAT_OPTIONS })
  const formattedStatus = capitalize(status).replace(/_/gi, ' ')

  const STATUS_COLORS = {
    draft: palette.warning.main,
    processing: palette.warning.main,
    sent_to_buyer: palette.success.main,
  }

  return (
    <Stack direction="row" columnGap={{ xs: 5, md: 6 }} rowGap={2} flexWrap="wrap">
      <OrderInfo
        title={intl.formatMessage({
          defaultMessage: 'Order Number',
          id: 'ordersPage.orderCard.orderNumber',
        })}
        data={String(id)}
        fixedWidth
      />

      <OrderInfo
        title={intl.formatMessage({
          defaultMessage: 'Order Date',
          id: 'ordersPage.orderCard.orderDate',
        })}
        data={getFormattedDate(createdAt)}
        fixedWidth
      />

      <OrderInfo
        title={intl.formatMessage({
          defaultMessage: 'Total Amount',
          id: 'ordersPage.orderCard.totalAmount',
        })}
        data={formattedTotal}
        fixedWidth
      />

      <OrderInfo
        title={intl.formatMessage({
          defaultMessage: 'Shipping Cost',
          id: 'ordersPage.orderCard.shippingCost',
        })}
        data={formattedShippingCost}
        fixedWidth
      />

      <OrderInfo
        title={intl.formatMessage({
          defaultMessage: 'Status',
          id: 'ordersPage.orderCard.status',
        })}
        data={formattedStatus}
        dataColor={STATUS_COLORS[status]}
        fixedWidth
      />
    </Stack>
  )
}
