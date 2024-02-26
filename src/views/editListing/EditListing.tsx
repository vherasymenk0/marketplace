'use client'

import { Box, Container } from '@mui/material'

import { EditListingForm } from '~/features/listing'

import { ListingModel } from '~/entities/listing'

import { BackButton } from '~/shared/components/common/BackButton'

interface Props {
  listing: ListingModel
}

export const EditListing = ({ listing }: Props) => {
  return (
    <Container sx={{ mt: { xs: 3, md: 4 }, mb: { xs: 12, md: 14 } }}>
      <Box mb={3}>
        <BackButton />
      </Box>

      <EditListingForm listing={listing} />
    </Container>
  )
}
