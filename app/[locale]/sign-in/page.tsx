import { Metadata } from 'next'

import { SignInBuyer } from 'src/views/signInBuyer'

export const metadata: Metadata = {
  title: 'Buyer Sign-In',
  description:
    'Log in to your account to access exclusive features and manage your personal settings.',
}

const Page = () => <SignInBuyer />

export default Page
