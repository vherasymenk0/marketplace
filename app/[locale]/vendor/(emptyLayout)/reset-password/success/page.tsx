import { Metadata } from 'next'

import { ResetVendorPasswordSuccess } from '~/views/resetVendorPasswordSuccess'

export const metadata: Metadata = {
  title: 'Password Reset Successful',
  description:
    'Your password has been successfully reset. You can now log in with your new password and continue enjoying our services.',
}

const Page = () => <ResetVendorPasswordSuccess />

export default Page
