import { z } from 'zod'

import { ConfirmPasswordSchema, CreateVendorPasswordSchemaRequest } from '~/entities/auth'

import { mapCamelToSnakeCase } from '~/shared/helpers/cases'

export const CreateVendorPasswordFormSchema = z
  .object({
    create_password_token: z.string(),
  })
  .and(ConfirmPasswordSchema)

export type CreateVendorPasswordFormValues = z.infer<typeof CreateVendorPasswordFormSchema>
export const mapFormSchemaToRequest = (values: CreateVendorPasswordFormValues) =>
  CreateVendorPasswordSchemaRequest.parse(mapCamelToSnakeCase(values))
