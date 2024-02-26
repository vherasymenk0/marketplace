import { AuthLayout } from '~/widgets/layouts/auth'

import { SignInVendorDescription } from '~/entities/auth'

interface Props {
  children: React.JSX.Element
}

const Layout = ({ children }: Props) => (
  <AuthLayout startAdornment={<SignInVendorDescription />}>{children}</AuthLayout>
)

export default Layout
