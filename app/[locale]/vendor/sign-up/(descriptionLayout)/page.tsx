import { Metadata } from 'next'

import { CreateVendorAccount } from '~/views/createVendorAccount'

export const metadata: Metadata = {
  title: 'Vendor Registration',
  description:
    "You're a registered vendor. What now? We will showcase your unique products alongside supplies and tools for shoppers.",
}

const Page = () => <CreateVendorAccount />

export default Page
