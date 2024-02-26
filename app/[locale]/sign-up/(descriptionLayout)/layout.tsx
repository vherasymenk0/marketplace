import { AuthLayout } from '~/widgets/layouts/auth'

import { SignUpBuyerDescription } from '~/entities/auth'

interface Props {
  children: React.JSX.Element
}

const Layout = ({ children }: Props) => {
  return <AuthLayout startAdornment={<SignUpBuyerDescription />}>{children}</AuthLayout>
}

export default Layout
