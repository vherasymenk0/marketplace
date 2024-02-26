import { z } from 'zod'

import { CreateVendorAccountSchemaRequest } from '~/entities/auth'

import * as messages from '~/shared/constants/messages'
import { COUNTRY_OPTIONS } from '~/shared/constants/options'
import { mapCamelToSnakeCase } from '~/shared/helpers/cases'
import { phoneNumber, stringLength } from '~/shared/helpers/validation'

export const CreateVendorFormSchema = z.object({
  fullName: z.string().nonempty({ message: messages.REQUIRED }).superRefine(stringLength()),
  companyName: z.string().nonempty({ message: messages.REQUIRED }).superRefine(stringLength()),
  country: z.enum(COUNTRY_OPTIONS),
  phone: z.string().nonempty({ message: messages.REQUIRED }).superRefine(phoneNumber),
  email: z.string().nonempty({ message: messages.REQUIRED }).email(),
})

export type CreateVendorFormValues = z.infer<typeof CreateVendorFormSchema>
export const mapFormSchemaToRequest = (values: CreateVendorFormValues) =>
  CreateVendorAccountSchemaRequest.parse({ vendor: mapCamelToSnakeCase(values) })
