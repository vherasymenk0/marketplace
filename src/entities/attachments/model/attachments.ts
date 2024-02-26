import { z } from 'zod'

export const UploadFileSchemaResponse = z.object({
  data: z.object({
    id: z.string(),
    metadata: z.object({
      filename: z.string(),
      mime_type: z.string(),
      size: z.number(),
    }),
    storage: z.string(),
  }),
  url: z.string().url(),
})

export const UploadImageSchemaResponse = z.object({
  attachment: z.string(),
  url: z.string().url(),
})

export const ImageSchemaModel = z.object({
  id: z.string().uuid(),
  image: z.string().url(),
  position: z.number(),
})

export const CreateImageSchemaModel = z.object({
  image: z.string(),
  position: z.number().optional(),
})

export const UpdateImageSchemaModel = ImageSchemaModel.extend({
  _destroy: z.boolean().optional(),
}).or(CreateImageSchemaModel)

export const AttachmentRequestSchema = z
  .object({
    attachment: z.string(),
    url: z.string(),
  })
  .strict()

export type UploadFileResponse = z.infer<typeof UploadFileSchemaResponse>
export type UploadImageResponse = z.infer<typeof UploadImageSchemaResponse>
export type ImageModel = z.infer<typeof ImageSchemaModel>
