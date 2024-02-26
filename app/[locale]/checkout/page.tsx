import { notFound } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { CheckoutView } from '~/views/checkout'

import { authConfig } from '~/entities/auth'
import { getCheckoutOrders } from '~/entities/orders'

const Page = async () => {
  const session = await getServerSession(authConfig)
  let checkout

  try {
    const { checkout: data } = await getCheckoutOrders({ authorizeToken: session?.apiToken })
    checkout = data
  } catch (_) {
    notFound()
  }

  return <CheckoutView orders={checkout.orders} orderSummary={checkout.orderSummary} />
}

export default Page
