import { AuthLayout } from '~/widgets/layouts/auth'

import { SignUpVendorDescription } from '~/entities/auth'

interface Props {
  children: React.JSX.Element
}

const Layout = ({ children }: Props) => {
  return <AuthLayout startAdornment={<SignUpVendorDescription />}>{children}</AuthLayout>
}

export default Layout
