import { z } from 'zod'

import { ForgotVendorPasswordSchemaRequest } from '~/entities/auth'

import * as messages from '~/shared/constants/messages'
import { mapCamelToSnakeCase } from '~/shared/helpers/cases'

export const ForgotVendorPasswordFormSchema = z.object({
  email: z.string().nonempty({ message: messages.REQUIRED }).email(),
})

export type ForgotVendorPasswordFormValues = z.infer<typeof ForgotVendorPasswordFormSchema>
export const mapFormSchemaToRequest = (values: ForgotVendorPasswordFormValues) =>
  ForgotVendorPasswordSchemaRequest.parse({ vendor: mapCamelToSnakeCase(values) })
