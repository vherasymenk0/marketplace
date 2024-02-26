import { AuthLayout } from '~/widgets/layouts/auth'

interface Props {
  children: React.JSX.Element
}

const Layout = ({ children }: Props) => {
  return <AuthLayout>{children}</AuthLayout>
}

export default Layout
