import { z } from 'zod'

import { ConfirmPasswordSchema, ResetVendorPasswordSchemaRequest } from '~/entities/auth'

import { mapCamelToSnakeCase } from '~/shared/helpers/cases'

export const ResetVendorPasswordFormSchema = z
  .object({
    token: z.string(),
  })
  .and(ConfirmPasswordSchema)

export type ResetVendorPasswordFormValues = z.infer<typeof ResetVendorPasswordFormSchema>
export const mapFormSchemaToRequest = ({ token, ...values }: ResetVendorPasswordFormValues) =>
  ResetVendorPasswordSchemaRequest.parse({ vendor: mapCamelToSnakeCase(values), token })
