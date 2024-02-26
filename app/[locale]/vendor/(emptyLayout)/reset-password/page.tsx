import { Metadata } from 'next'

import { ResetVendorPassword } from '~/views/resetVendorPassword'

import { useTokenValidation, verifyVendorPasswordResetToken } from '~/entities/auth'

export const metadata: Metadata = {
  title: 'Reset Password',
  description:
    "Create a new password for your account. Ensure your account's security by choosing a strong, unique password.",
}

interface Props {
  searchParams: { token?: string }
}

const Page = async ({ searchParams }: Props) => {
  const token = searchParams?.token ?? ''

  await useTokenValidation({
    verifyResetToken: verifyVendorPasswordResetToken,
    token,
    redirectPath: '/vendor/reset-password/expired',
  })

  return <ResetVendorPassword />
}

export default Page
