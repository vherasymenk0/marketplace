import { Metadata } from 'next'

import { AuthVendorSuccess } from '~/views/authVendorSuccess'

export const metadata: Metadata = {
  title: 'Vendor Password Creation Successful',
  description: 'Your password has been successfully created now you can sign in.',
}

const Page = () => {
  return <AuthVendorSuccess />
}

export default Page
