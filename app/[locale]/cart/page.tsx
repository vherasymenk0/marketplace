import { Metadata } from 'next'

import { CartView } from '~/views/cartView'

export const metadata: Metadata = {
  title: 'Cart',
}

const Page = () => {
  return <CartView />
}

export default Page
