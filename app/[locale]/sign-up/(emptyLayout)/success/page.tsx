import { Metadata } from 'next'

import { AuthBuyerSuccess } from 'src/views/authBuyerSuccess'

export const metadata: Metadata = {
  title: 'Buyer Success',
  description:
    'Your email has been successfully verified! Welcome to our community of buyers. You can now access all the features and start exploring our marketplace.',
}

const Page = () => {
  return <AuthBuyerSuccess />
}

export default Page
