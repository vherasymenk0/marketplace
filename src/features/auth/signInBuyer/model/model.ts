import { z } from 'zod'

import { SignInBuyerSchemaRequest } from '~/entities/auth'

import * as messages from '~/shared/constants/messages'
import { mapCamelToSnakeCase } from '~/shared/helpers/cases'
import { stringLength, validatePassword } from '~/shared/helpers/validation'

export const SignInBuyerFormSchema = z.object({
  email: z.string().nonempty({ message: messages.REQUIRED }).email(),
  password: z
    .string()
    .nonempty({ message: messages.REQUIRED })
    .superRefine(stringLength())
    .superRefine(validatePassword),
})

export type SignInBuyerFormValues = z.infer<typeof SignInBuyerFormSchema>
export const mapFormSchemaToRequest = (values: SignInBuyerFormValues) =>
  SignInBuyerSchemaRequest.parse({ user: mapCamelToSnakeCase(values) })
