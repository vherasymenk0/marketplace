import dynamic from 'next/dynamic'

import { UserModel } from '~/entities/user'

const BuyerMobileMenu = dynamic(() =>
  import('./BuyerMobileMenu').then((mod) => mod.BuyerMobileMenu),
)
const VendorMobileMenu = dynamic(() =>
  import('./VendorMobileMenu').then((mod) => mod.VendorMobileMenu),
)
const UnloginMobileMenu = dynamic(() =>
  import('./UnloginMobileMenu').then((mod) => mod.UnloginMobileMenu),
)

export const MenuActions = ({ user }: { user?: UserModel }) => {
  if (user && user.type === 'user') return <BuyerMobileMenu />
  if (user && user.type === 'vendor') return <VendorMobileMenu />

  return <UnloginMobileMenu />
}
