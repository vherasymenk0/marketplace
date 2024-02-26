import { Divider, Stack } from '@mui/material'
import { FormattedMessage, useIntl } from 'react-intl'

import { Text } from '~/shared/components/base/Text'

import { OrderModel } from '../../model/order'

import { ChangeOrderStatus } from './ChangeOrderStatus'
import { OrderInfo } from './OrderInfo'
import { OrderItem } from './OrderItem'

interface Props extends Pick<OrderModel, 'contactInformations' | 'orderItems' | 'status' | 'id'> {
  isVendor: boolean
  shippingInformation?: string
}

export const AdditionalInformation = ({
  contactInformations,
  orderItems,
  isVendor,
  status,
  id,
  shippingInformation,
}: Props) => {
  const intl = useIntl()

  return (
    <Stack gap={3} mt={3}>
      <Divider />

      <Stack gap={2}>
        <Text variant="subtitle2" color="grey.900">
          {isVendor ? (
            <FormattedMessage
              defaultMessage="Buyer Information"
              id="ordersPage.orderCard.buyerInformation"
            />
          ) : (
            <FormattedMessage
              defaultMessage="Vendor Information"
              id="ordersPage.orderCard.vendorInformation"
            />
          )}
        </Text>

        <Stack gap={0.5}>
          <OrderInfo
            title={intl.formatMessage({
              defaultMessage: 'Email:',
              id: 'ordersPage.orderCard.userInformation.email',
            })}
            data={contactInformations.email}
            direction="row"
          />

          <OrderInfo
            title={intl.formatMessage({
              defaultMessage: 'Phone number:',
              id: 'ordersPage.orderCard.userInformation.phoneNumber',
            })}
            data={contactInformations.phone}
            direction="row"
          />

          <OrderInfo
            title={intl.formatMessage({
              defaultMessage: 'Company Name:',
              id: 'ordersPage.orderCard.vendorInformation.companyName',
            })}
            data={contactInformations.companyName}
            direction="row"
          />

          <OrderInfo
            title={intl.formatMessage({
              defaultMessage: 'Name:',
              id: 'ordersPage.orderCard.buyerInformation.name',
            })}
            data={contactInformations.fullName}
            direction="row"
          />

          <OrderInfo
            title={intl.formatMessage({
              defaultMessage: 'Shipping info:',
              id: 'ordersPage.orderCard.buyerInformation.name',
            })}
            data={shippingInformation}
            direction="row"
          />
        </Stack>
      </Stack>

      {orderItems.map((item) => (
        <Stack gap={3} key={item.id}>
          <Divider />

          <OrderItem orderItem={item} isAllowLeaveReview={isVendor} />
        </Stack>
      ))}

      {isVendor ? <ChangeOrderStatus status={status} id={id} /> : null}
    </Stack>
  )
}
