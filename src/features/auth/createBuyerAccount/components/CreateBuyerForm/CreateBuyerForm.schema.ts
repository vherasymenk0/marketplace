import { z } from 'zod'

import { CreateBuyerAccountSchemaRequest } from '~/entities/auth'

import * as messages from '~/shared/constants/messages'
import { mapCamelToSnakeCase } from '~/shared/helpers/cases'
import { stringLength, validatePassword } from '~/shared/helpers/validation'

export const CreateBuyerFormSchema = z.object({
  fullName: z.string().nonempty({ message: messages.REQUIRED }).superRefine(stringLength()),
  email: z.string().nonempty({ message: messages.REQUIRED }).email(),
  password: z
    .string()
    .nonempty({ message: messages.REQUIRED })
    .superRefine(stringLength())
    .superRefine(validatePassword),
})

export type CreateBuyerFormValues = z.infer<typeof CreateBuyerFormSchema>
export const mapFormSchemaToRequest = (values: CreateBuyerFormValues) =>
  CreateBuyerAccountSchemaRequest.parse({ user: mapCamelToSnakeCase(values) })
