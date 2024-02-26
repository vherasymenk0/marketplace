import { z } from 'zod'

import { SignInVendorSchemaRequest } from '~/entities/auth'

import * as messages from '~/shared/constants/messages'
import { mapCamelToSnakeCase } from '~/shared/helpers/cases'
import { stringLength, validatePassword } from '~/shared/helpers/validation'

export const SignInVendorFormSchema = z.object({
  email: z.string().nonempty({ message: messages.REQUIRED }).email(),
  password: z
    .string()
    .nonempty({ message: messages.REQUIRED })
    .superRefine(stringLength())
    .superRefine(validatePassword),
})

export type SignInVendorFormValues = z.infer<typeof SignInVendorFormSchema>
export const mapFormSchemaToRequest = (values: SignInVendorFormValues) =>
  SignInVendorSchemaRequest.parse({ vendor: mapCamelToSnakeCase(values) })
