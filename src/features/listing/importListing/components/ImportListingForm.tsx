'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Stack } from '@mui/material'
import { useSession } from 'next-auth/react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { uploadListing } from '~/entities/attachments'
import { importListing } from '~/entities/import'

import { UploadFileDndField } from '~/shared/components/fields/UploadFileDropzoneField'
import { useHandleFormError } from '~/shared/hooks/errorHandlers'
import { useRouter } from '~/shared/hooks/useRouter'

import { ImportListingFormSchema, ImportListingFormValues } from '../model'

import { ImportListingModal } from './ImportListingModal'
import { ImportListingSample } from './ImportListingSample'

export const ImportListingForm = () => {
  const session = useSession()
  const router = useRouter()
  const methods = useForm<ImportListingFormValues>({
    defaultValues: {
      listing: null,
    },
    resolver: zodResolver(ImportListingFormSchema),
  })
  const { handleSubmit: onSubmit, setError, reset } = methods
  const handleFormError = useHandleFormError(setError)

  const { listing } = methods.watch()
  const isDisabled = !listing

  const handleSubmit = onSubmit(async (values: ImportListingFormValues) => {
    try {
      if (values.listing?.payload?.attachment) {
        const dto = {
          listing_import: {
            file: values.listing.payload.attachment,
          },
        }

        await importListing(dto, { authorizeToken: session.data?.apiToken })
        router.refresh()
        reset()
      }
    } catch (error) {
      handleFormError(error)
    }
  })

  return (
    <FormProvider {...methods}>
      <UploadFileDndField
        name="listing"
        onUpload={({ file }) => uploadListing(file, { authorizeToken: session.data?.apiToken })}
        key={listing?.name}
        loadingMessage={
          <FormattedMessage
            id="importListing.loadingState"
            defaultMessage="The file is loading, please do not close the tab or go to other pages"
          />
        }
      />
      <ImportListingSample />
      <Stack alignItems="flex-end" width="100%" mt={4}>
        <ImportListingModal isDisabled={isDisabled} onSubmit={handleSubmit} />
      </Stack>
    </FormProvider>
  )
}
