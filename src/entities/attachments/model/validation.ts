import { RefinementCtx, z } from 'zod'

import * as messages from '~/shared/constants/messages'
import { FileModelSchema } from '~/shared/services/uploadFile'

import { AttachmentRequestSchema } from './attachments'

export const AttachmentSchema = z
  .object(
    FileModelSchema.extend({
      position: z.number().optional(),
      payload: z.optional(AttachmentRequestSchema),
      _destroy: z.boolean().optional(),
    }).shape,
    {
      required_error: messages.REQUIRED,
      invalid_type_error: messages.REQUIRED,
    },
  )
  .strict()

export type Attachment = z.infer<typeof AttachmentSchema>

interface TestFilesOptions {
  name?: string
  requiredMessage?: string
  maxCountMessage?: string
  maxCount?: number
  minCount?: number
  required?: boolean
}

export const testFilesZod =
  (options: TestFilesOptions = {}) =>
  (files: Attachment[], ctx: RefinementCtx) => {
    const {
      requiredMessage = '',
      maxCount = 0,
      minCount = 0,
      required = true,
      maxCountMessage,
    } = options
    const { length } = files
    const isMin = minCount > 0
    const isMax = maxCount > 0

    const isUploadError = files.some((file) => file.error)

    if (required && length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: requiredMessage || 'Files are required',
      })
    }

    if (isUploadError) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Something went wrong...',
      })
    }

    if (isMin && length < minCount) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Must be greater than or equal to ${minCount}`,
      })
    }

    if (isMax && length > maxCount) {
      const message = maxCountMessage ?? 'Maximum files amount is'
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `${message} ${maxCount}`,
      })
    }
  }
