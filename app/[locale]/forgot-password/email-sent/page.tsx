import { Metadata } from 'next'

import { ForgotBuyerEmailSent } from '~/views/forgotBuyerEmailSent'

export const metadata: Metadata = {
  title: 'Check Your Inbox',
  description:
    'A password reset link has been sent to your email. Follow the instructions in the email to reset your password and access your account.',
}

const Page = () => <ForgotBuyerEmailSent />

export default Page
