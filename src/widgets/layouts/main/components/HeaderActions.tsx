import dynamic from 'next/dynamic'
import { useSession } from 'next-auth/react'

const UnloginHeaderActions = dynamic(() =>
  import('./UnloginHeaderActions').then((mod) => mod.UnloginHeaderActions),
)
const BuyerHeaderActions = dynamic(() =>
  import('./BuyerHeaderActions').then((mod) => mod.BuyerHeaderActions),
)
const VendorHeaderActions = dynamic(() =>
  import('./VendorHeaderActions').then((mod) => mod.VendorHeaderActions),
)

export const HeaderActions = () => {
  const session = useSession()
  const user = session.data?.user

  if (user && user.type === 'user') return <BuyerHeaderActions />
  if (user && user.type === 'vendor') return <VendorHeaderActions />

  return <UnloginHeaderActions />
}
