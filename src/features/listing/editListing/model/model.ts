import { RefinementCtx, z } from 'zod'

import { AttachmentSchema, testFilesZod } from '~/entities/attachments'
import {
  EditListingSchemaRequest,
  LISTING_STATUSES,
  LISTING_STATUSES_ENUM,
} from '~/entities/listing'

import { mapCamelToSnakeCase } from '~/shared/helpers/cases'
import { stringLength } from '~/shared/helpers/validation'

export const EditListingFormSchema = z
  .object({
    price: z
      .number({
        required_error: 'Price is required',
        invalid_type_error: 'Price is required',
      })
      .max(999999, "Price can't exceed $999,999"),
    shippingCost: z
      .number({
        required_error: 'Shipping Cost is required',
        invalid_type_error: 'Shipping Cost is required',
      })
      .max(10000, "Shipping cost can't exceed $10,000")
      .min(0),
    description: z.string().superRefine(stringLength(2000, 0)).nullable(),
    partName: z.string(),
    originCountry: z.string(),
    brand: z.string(),
    partNumber: z.string(),
    partType: z.string(),
    status: z.enum(LISTING_STATUSES_ENUM),
    imagesAttributes: z
      .array(
        AttachmentSchema.extend({
          imageData: z.string().optional(),
        }),
      )
      .superRefine(
        testFilesZod({
          maxCount: 10,
          required: false,
          maxCountMessage: 'Maximum images amount is',
        }),
      ),
  })
  .superRefine((data, ctx: RefinementCtx) => {
    const isActiveStatus = data.status === LISTING_STATUSES.active
    const haveImages = data.imagesAttributes.length > 0

    if (isActiveStatus && !haveImages) {
      ctx.addIssue({
        path: ['imagesAttributes'],
        code: z.ZodIssueCode.custom,
        message: 'Images are required',
      })
    }
  })

export type EditListingFormValues = z.infer<typeof EditListingFormSchema>

export const mapEditFormSchemaToRequest = ({
  price,
  shippingCost,
  description,
  imagesAttributes,
}: EditListingFormValues) => {
  const dto = {
    price,
    shippingCost,
    description,
    listingImagesAttributes: imagesAttributes.map(({ id, imageData, _destroy, payload }, index) => {
      return payload
        ? {
            position: index,
            image: payload.attachment,
          }
        : { position: index, image: imageData, id, _destroy }
    }),
  }

  return EditListingSchemaRequest.parse({ listing: mapCamelToSnakeCase(dto) })
}
