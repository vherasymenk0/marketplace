'use client'

import { Container } from '@mui/material'
import { FormattedMessage, useIntl } from 'react-intl'

import { CheckoutOrderModel, CheckoutOrderSummaryModel } from 'src/entities/orders'

import { CreateOrderForm } from '~/features/orders'

import { Breadcrumbs } from '~/shared/components/base/Breadcrumbs'
import { Text } from '~/shared/components/base/Text'

interface Props {
  orders: CheckoutOrderModel[]
  orderSummary: CheckoutOrderSummaryModel
}

export const CheckoutView = ({ orderSummary, orders }: Props) => {
  const intl = useIntl()

  const breadcrumbs = [
    { child: intl.formatMessage({ defaultMessage: 'Home', id: 'common.home' }), href: '/' },
    {
      child: intl.formatMessage({ defaultMessage: 'Cart', id: 'common.cart' }),
      href: '/cart',
    },
    {
      child: intl.formatMessage({ defaultMessage: 'Checkout', id: 'common.checkout' }),
      href: '#',
    },
  ]

  return (
    <Container sx={{ mt: { xs: 3, md: 4 }, mb: { xs: 12, md: 14 } }}>
      <Breadcrumbs items={breadcrumbs} />

      <Text variant="h6" color="grey.900" mt={3}>
        <FormattedMessage id="checkout.title" defaultMessage="Checkout" />
      </Text>

      <CreateOrderForm orders={orders} orderSummary={orderSummary} />
    </Container>
  )
}
