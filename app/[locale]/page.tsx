import { Home } from '~/views/home'

import { MainLayout } from '~/widgets/layouts/main'

import { getBestSelling, getNewArrivals } from '~/entities/listing'

const HomePage = async () => {
  const newArrivals = await getNewArrivals({ cache: 'no-store' })
  const bestSelling = await getBestSelling({ next: { revalidate: 24 * 3600 } })

  return (
    <MainLayout>
      <Home newArrivals={newArrivals} bestSelling={bestSelling} />
    </MainLayout>
  )
}

export default HomePage
