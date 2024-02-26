import { NotFound } from '~/views/notFound'

import { MainLayout } from '~/widgets/layouts/main'

const NotFoundPage = () => {
  return (
    <MainLayout>
      <NotFound />
    </MainLayout>
  )
}

export default NotFoundPage
