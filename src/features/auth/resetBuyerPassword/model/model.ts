import { z } from 'zod'

import { ConfirmPasswordSchema, ResetBuyerPasswordSchemaRequest } from '~/entities/auth'

import { mapCamelToSnakeCase } from '~/shared/helpers/cases'

export const ResetBuyerPasswordFormSchema = z
  .object({
    token: z.string(),
  })
  .and(ConfirmPasswordSchema)

export type ResetBuyerPasswordFormValues = z.infer<typeof ResetBuyerPasswordFormSchema>
export const mapFormSchemaToRequest = ({ token, ...values }: ResetBuyerPasswordFormValues) =>
  ResetBuyerPasswordSchemaRequest.parse({ user: mapCamelToSnakeCase(values), token })
