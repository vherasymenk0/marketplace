import { Metadata } from 'next'

import { VendorRequestSent } from '~/views/vendorRequestSent'

export const metadata: Metadata = {
  title: 'Vendor Request Sent',
  description: "We're excited to have you join us, our specialist will contact you soon.",
}

const Page = () => {
  return <VendorRequestSent />
}

export default Page
