'use client'

import { Container } from '@mui/material'

import { NewArrivalsModel } from '~/entities/listing'

import { CSSHide } from '~/shared/components/base/CSSHide'

import {
  BestSellingSection,
  CategoriesSection,
  EssentialsSection,
  HeadImageSection,
  InfoSection,
  NewArrivalsSection,
  WantToSellSection,
} from './components'

interface Props {
  newArrivals: NewArrivalsModel['listings']
  bestSelling: NewArrivalsModel['listings']
}

export const Home = ({ newArrivals, bestSelling }: Props) => {
  return (
    <Container sx={{ mt: { xs: 3, md: 6 }, mb: { xs: 0, md: 14 } }}>
      <HeadImageSection />

      <CSSHide screen="mobile">
        <InfoSection />
      </CSSHide>

      <CategoriesSection />

      <EssentialsSection />

      <NewArrivalsSection listings={newArrivals} />

      <BestSellingSection listings={bestSelling} />

      <WantToSellSection />
    </Container>
  )
}

export default Home
