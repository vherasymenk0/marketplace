import { Metadata } from 'next'

import { ResetBuyerPassword } from '~/views/resetBuyerPassword'

import { useTokenValidation, verifyBuyerPasswordResetToken } from '~/entities/auth'

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
    verifyResetToken: verifyBuyerPasswordResetToken,
    token,
    redirectPath: '/reset-password/expired',
  })

  return <ResetBuyerPassword />
}

export default Page
