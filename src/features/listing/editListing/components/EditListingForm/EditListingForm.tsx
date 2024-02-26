'use client'

import { Stack } from '@mui/material'
import { FormProvider } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import {
  ListingImagesFormTemplate,
  ListingModel,
  ProductAttributes,
  ProductDetailsFormTemplate,
} from '~/entities/listing'

import { Button } from '~/shared/components/base/Button'
import { Text } from '~/shared/components/base/Text'

import { useEditListingForm } from '../../hooks/useEditListingForm'
import { EditListingActionModal } from '../EditListingActionModal'

interface Props {
  listing: ListingModel
}

export const EditListingForm = ({ listing }: Props) => {
  const { methods, handleSubmit, isPending, isDisabled } = useEditListingForm(listing)

  return (
    <FormProvider {...methods}>
      <Stack gap={4}>
        <Text variant="h6" color="grey.900">
          <FormattedMessage defaultMessage="Edit Listing" id="editListing.title" />
        </Text>

        <ListingImagesFormTemplate />

        <ProductDetailsFormTemplate />

        <ProductAttributes attributes={listing.partAttributes} />

        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          justifyContent="flex-start"
          gap={{ xs: 2, md: 3 }}
        >
          <Button onClick={handleSubmit} loading={isPending} disabled={isDisabled}>
            <FormattedMessage defaultMessage="Save Changes" id="editListing.actions.save" />
          </Button>
          <EditListingActionModal
            listingId={listing.id}
            listingTitle={listing.title}
            listingStatus={listing.status}
            isOrdered={listing?.ordered}
          />
        </Stack>
      </Stack>
    </FormProvider>
  )
}
