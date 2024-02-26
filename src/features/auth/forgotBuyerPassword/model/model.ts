import { z } from 'zod'

import { ForgotBuyerPasswordSchemaRequest } from '~/entities/auth'

import * as messages from '~/shared/constants/messages'
import { mapCamelToSnakeCase } from '~/shared/helpers/cases'

export const ForgotBuyerPasswordFormSchema = z.object({
  email: z.string().nonempty({ message: messages.REQUIRED }).email(),
})

export type ForgotBuyerPasswordFormValues = z.infer<typeof ForgotBuyerPasswordFormSchema>
export const mapFormSchemaToRequest = (values: ForgotBuyerPasswordFormValues) =>
  ForgotBuyerPasswordSchemaRequest.parse({ user: mapCamelToSnakeCase(values) })
