import { z } from 'zod'

import { CheckoutOrdersSchemaRequest } from '~/entities/orders'

import * as messages from '~/shared/constants/messages'
import { mapCamelToSnakeCase } from '~/shared/helpers/cases'
import { stringLength } from '~/shared/helpers/validation'

export const CreateOrdersFormSchema = z.object({
  contactInformation: z.object({
    fullName: z.string().nonempty({ message: messages.REQUIRED }).superRefine(stringLength()),
    phone: z.string().nonempty({ message: messages.REQUIRED }).superRefine(stringLength(15, 10)),
    email: z.string().nonempty({ message: messages.REQUIRED }).email(),
  }),
  shippingInformation: z.object({
    country: z.string().nonempty({ message: messages.REQUIRED }),
    city: z.string().nonempty({ message: messages.REQUIRED }).superRefine(stringLength(100, 0)),
    address: z.string().nonempty({ message: messages.REQUIRED }).superRefine(stringLength(100, 0)),
  }),
})

export type CreateOrdersFormValues = z.infer<typeof CreateOrdersFormSchema>
export const mapFormSchemaToRequest = (values: CreateOrdersFormValues) =>
  CheckoutOrdersSchemaRequest.parse({ checkout: mapCamelToSnakeCase(values) })
