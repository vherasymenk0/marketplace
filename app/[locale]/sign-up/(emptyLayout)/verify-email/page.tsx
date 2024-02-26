import { Metadata } from 'next'

import { VerifyBuyerAccount } from '~/views/verifyBuyerAccount'

export const metadata: Metadata = {
  title: 'Buyer Verify Email',
  description:
    'Complete your account setup by verifying your email. This step ensures the security of your buyer account and enables full access to our services.',
}

const Page = () => {
  return <VerifyBuyerAccount />
}

export default Page
