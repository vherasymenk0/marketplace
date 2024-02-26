import { ApiMethod } from '~/shared/services/fetch'

import { uploadFile } from './lib/uploadFile'
import { UploadImageResponse } from './model/attachments'

export type UploadMethod = ApiMethod<UploadImageResponse, File>

export const uploadListingImage: UploadMethod = (file, options) =>
  uploadFile(file, {
    endpoint: 'api/v1/vendors/attachments/listing_images/upload',
    ...options,
  })

export const uploadListing: UploadMethod = (file, options) =>
  uploadFile(file, {
    endpoint: 'api/v1/vendors/attachments/listing_imports/upload',
    ...options,
  })
