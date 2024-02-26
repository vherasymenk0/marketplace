import { Metadata } from 'next'

import { CreatePasswordLinkExpired } from '~/views/createPasswordLinkExpired'

export const metadata: Metadata = {
  title: 'Link was expired',
  description:
    'It looks like your password creation link has expired. You can get a new password creation email by clicking the button below.',
}

const Page = () => {
  return <CreatePasswordLinkExpired />
}

export default Page
