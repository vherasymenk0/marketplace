import { AuthLayout } from '~/widgets/layouts/auth'

import { SignInBuyerDescription } from '~/entities/auth'

interface Props {
  children: React.JSX.Element
}

const Layout = ({ children }: Props) => (
  <AuthLayout startAdornment={<SignInBuyerDescription />}>{children}</AuthLayout>
)

export default Layout
