import { Metadata } from 'next'

import { SignInVendor } from '~/views/signInVendor'

export const metadata: Metadata = {
  title: 'Vendor Sign-In',
  description:
    'Log in to your account to access exclusive features and manage your personal settings.',
}

const Page = () => <SignInVendor />

export default Page
