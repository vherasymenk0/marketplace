import { z } from 'zod'

import { FileModelSchema } from '~/shared/services/uploadFile'

export const ImportListingFormSchema = z.object({
  listing: FileModelSchema.nullable(),
})

export type ImportListingFormValues = z.infer<typeof ImportListingFormSchema>
