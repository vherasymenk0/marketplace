import { z } from 'zod'

import { COUNTRY_OPTIONS } from '~/shared/constants/options'

export const SignInVendorSchemaResponse = z.object({
  token: z.string().nonempty(),
})

export const CreateVendorAccountSchemaRequest = z
  .object({
    vendor: z.object({
      full_name: z.string(),
      company_name: z.string(),
      country: z.enum(COUNTRY_OPTIONS),
      phone: z.string(),
      email: z.string(),
    }),
  })
  .strict()

export const UploadFFLSchemaRequest = z
  .object({
    attachment: z.string(),
    expiration_date: z.string().datetime({ offset: true }),
  })
  .strict()

export const SignInVendorSchemaRequest = z.object({
  vendor: z.object({
    email: z.string(),
    password: z.string(),
  }),
})

export const ForgotVendorPasswordSchemaRequest = z.object({
  vendor: z.object({
    email: z.string(),
  }),
})

export const ResetVendorPasswordSchemaRequest = z.object({
  vendor: z.object({
    password: z.string(),
    password_confirmation: z.string(),
  }),
  token: z.string(),
})

export const CreateVendorPasswordSchemaRequest = z.object({
  password: z.string(),
  password_confirmation: z.string(),
  create_password_token: z.string(),
})

export const ResendVendorPasswordCreationLinkSchemaRequest = z.object({
  token: z.string(),
})

export const ResendVendorNewPasswordCreationLinkSchemaRequest = z.object({
  token: z.string(),
})

export type SignInVendorRequest = z.infer<typeof SignInVendorSchemaRequest>
export type ForgotVendorPasswordRequest = z.infer<typeof ForgotVendorPasswordSchemaRequest>
export type ResetVendorPasswordRequest = z.infer<typeof ResetVendorPasswordSchemaRequest>
export type CreateVendorPasswordRequest = z.infer<typeof CreateVendorPasswordSchemaRequest>
export type CreateVendorAccountRequest = z.infer<typeof CreateVendorAccountSchemaRequest>
export type UploadFFLRequest = z.infer<typeof UploadFFLSchemaRequest>
export type SignInVendorResponse = z.infer<typeof SignInVendorSchemaResponse>
export type ResendVendorPasswordCreationLinkRequest = z.infer<
  typeof ResendVendorPasswordCreationLinkSchemaRequest
>
export type ResendVendorNewPasswordCreationLinkRequest = z.infer<
  typeof ResendVendorNewPasswordCreationLinkSchemaRequest
>
