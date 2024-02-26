import { Metadata } from 'next'

import { ResetVendorPasswordLinkExpired } from '~/views/resetVendorPasswordLinkExpired'

export const metadata: Metadata = {
  title: 'Link was expired',
  description:
    'It looks like your password creation link has expired. You can get a new password creation email by clicking the button below.',
}

const Page = () => {
  return <ResetVendorPasswordLinkExpired />
}

export default Page
