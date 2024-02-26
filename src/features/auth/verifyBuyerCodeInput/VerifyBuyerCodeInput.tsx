import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'

import { VerifyCodeInput, VerifyEmailCodeSchemaRequest, verifyBuyerAccount } from '~/entities/auth'

export const VerifyBuyerCodeInput = () => {
  const session = useSession()
  const router = useRouter()

  const verify = async (code: string) => {
    const dto = VerifyEmailCodeSchemaRequest.parse({
      user: {
        verification_code: Number(code),
      },
    })
    await verifyBuyerAccount(dto, { authorizeToken: session.data?.apiToken })
    await signOut({ redirect: false })
    router.refresh()
    router.replace('/sign-up/success')
  }

  return <VerifyCodeInput onVerify={verify} onlyNumbers />
}
