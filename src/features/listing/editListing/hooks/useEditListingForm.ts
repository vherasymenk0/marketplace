import { zodResolver } from '@hookform/resolvers/zod'
import { useSession } from 'next-auth/react'
import { useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'

import { sortByPosition, updateAttachmentsWithDeletions } from '~/entities/attachments'
import { type ListingModel, editListing } from '~/entities/listing'

import { capitalize } from '~/shared/helpers/capitalize'
import { useHandleFormError } from '~/shared/hooks/errorHandlers'
import { useRouter } from '~/shared/hooks/useRouter'
import { useFormScrollToError } from '~/shared/services/form'

import { EditListingFormSchema, EditListingFormValues, mapEditFormSchemaToRequest } from '../model'

export const useEditListingForm = (listing: ListingModel) => {
  const session = useSession()
  const router = useRouter()

  const defaultValues = useMemo(
    () => ({
      price: listing.price.USD,
      brand: listing.brand,
      description: listing.description,
      originCountry: listing.originCountry,
      partName: listing.title,
      partNumber: listing.partNumber,
      partType: capitalize(listing.partType),
      subcategory: listing.subcategory.name,
      category: listing.subcategory.category.name,
      shippingCost: listing.shippingCost,
      status: listing.status,
      imagesAttributes: sortByPosition(
        listing.listingImages.map((img) => ({
          id: img.id,
          position: img.position,
          url: img.imageUrl,
          imageData: img.imageData,
        })),
      ),
    }),
    [listing],
  )

  const methods = useForm<EditListingFormValues>({
    defaultValues,
    resolver: zodResolver(EditListingFormSchema),
  })

  const { setError, formState } = methods
  const { isSubmitting, errors, isDirty } = formState

  useFormScrollToError({
    isSubmitting,
    errors,
  })

  useEffect(() => {
    methods.reset(defaultValues)
  }, [defaultValues])

  const handleFormError = useHandleFormError(setError)

  const isPending = isSubmitting ?? router.isPending
  const isError = !!Object.keys(errors).length

  const handleSubmit = methods.handleSubmit(async (values) => {
    try {
      const imagesAttributes = updateAttachmentsWithDeletions(
        values.imagesAttributes,
        defaultValues.imagesAttributes,
      )
      const dto = mapEditFormSchemaToRequest({ ...values, imagesAttributes })

      await editListing(listing.id, dto, { authorizeToken: session.data?.apiToken })

      router.refresh()
      router.back()
    } catch (error) {
      handleFormError(error)
    }
  })

  return {
    methods,
    handleSubmit,
    isPending,
    isDisabled: isError || !isDirty,
  }
}
