import { Metadata } from 'next'

import { ResetBuyerPasswordSuccess } from '~/views/resetBuyerPasswordSuccess'

export const metadata: Metadata = {
  title: 'Password Reset Successful',
  description:
    'Your password has been successfully reset. You can now log in with your new password and continue enjoying our services.',
}

const Page = () => <ResetBuyerPasswordSuccess />

export default Page
