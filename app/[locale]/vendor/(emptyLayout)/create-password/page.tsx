import { Metadata } from 'next'

import { CreateVendorPassword } from '~/views/createVendorPassword'

import { useTokenValidation } from '~/entities/auth'

export const metadata: Metadata = {
  title: 'Vendor Registration',
  description:
    "You're a registered vendor. What now? We will showcase your unique products alongside supplies and tools for shoppers.",
}

interface Props {
  searchParams: { token?: string }
}

const Page = async ({ searchParams }: Props) => {
  const token = searchParams?.token ?? ''

  await useTokenValidation({
    token,
    redirectPath: '/vendor/create-password/expired',
  })

  return <CreateVendorPassword />
}

export default Page
