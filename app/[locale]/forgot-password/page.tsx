import { Metadata } from 'next'

import { ForgotBuyerPassword } from '~/views/forgotBuyerPassword'

export const metadata: Metadata = {
  title: 'Forgot Password',
  description:
    'Reset your forgotten password easily. Follow our simple and secure password recovery process to regain access to your account.',
}

const Page = () => <ForgotBuyerPassword />

export default Page
