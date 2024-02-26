import { Metadata } from 'next'

import { CreateBuyerAccount } from '~/views/createBuyerAccount'

export const metadata: Metadata = {
  title: 'Buyer Sign-Up',
  description: 'Join our marketplace by creating a buyer account.',
}

const Page = () => {
  return <CreateBuyerAccount />
}

export default Page
