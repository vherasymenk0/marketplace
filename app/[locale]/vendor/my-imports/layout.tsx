import { MainLayout } from '~/widgets/layouts/main'

interface Props {
  children: React.JSX.Element
}

const Layout = ({ children }: Props) => <MainLayout>{children}</MainLayout>

export default Layout
