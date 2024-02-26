'use client'

import { Container, Grid, Stack } from '@mui/material'

import { ImageGallery } from '~/widgets/ImageGallery'

import { ListingModel } from '~/entities/listing'

import { Breadcrumbs } from '~/shared/components/base/Breadcrumbs'

import { AttributesSection } from './components/AttributesSection'
import { DescriptionSection } from './components/DescriptionSection'
import { GeneralInfoSection } from './components/GeneralInfoSection'
import { ReviewSection } from './components/ReviewSection'

interface Props {
  listing: ListingModel
}

export const ListingView = ({ listing }: Props) => {
  const {
    subcategory,
    listingImages,
    partAttributes,
    description,
    brand,
    partNumber,
    shippingCost,
    partType,
    status,
    price,
    title,
    vendor,
    originCountry,
    id,
  } = listing

  return (
    <Container sx={{ mt: { xs: 3, md: 4 }, mb: { xs: 12, md: 14 } }}>
      <Stack gap={{ xs: 7, md: 14 }}>
        <Stack gap={3}>
          <Breadcrumbs
            items={[
              {
                child: subcategory.category.name,
                href: `/categories/${subcategory.category.slug}`,
              },
              {
                child: subcategory.name,
                href: `/categories/${subcategory.category.slug}/${subcategory.slug}`,
              },
              { child: title, href: '#' },
            ]}
          />

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <ImageGallery images={listingImages} />
            </Grid>

            <Grid item xs={12} md={6}>
              <GeneralInfoSection
                brand={brand}
                partNumber={partNumber}
                partType={partType}
                price={price}
                shippingCost={shippingCost}
                status={status}
                title={title}
                vendor={vendor}
                originCountry={originCountry}
                id={id}
              />
            </Grid>
          </Grid>
        </Stack>

        <Stack gap={{ xs: 4, md: 7 }}>
          <AttributesSection attributes={partAttributes} />

          <DescriptionSection description={description} />

          <ReviewSection />
        </Stack>
      </Stack>
    </Container>
  )
}
