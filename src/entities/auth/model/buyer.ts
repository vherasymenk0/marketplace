import { z } from 'zod'

export const SignInCustomerSchemaResponse = z.object({
  token: z.string().nonempty(),
})

export const SignInBuyerSchemaRequest = z.object({
  user: z.object({
    email: z.string(),
    password: z.string(),
  }),
})

export const ForgotBuyerPasswordSchemaRequest = z.object({
  user: z.object({
    email: z.string(),
  }),
})

export const ResetBuyerPasswordSchemaRequest = z.object({
  user: z.object({
    password: z.string(),
    password_confirmation: z.string(),
  }),
  token: z.string(),
})

export const CreateBuyerAccountSchemaRequest = z
  .object({
    user: z.object({
      full_name: z.string(),
      email: z.string(),
      password: z.string(),
    }),
  })
  .strict()

export const ResendNewPasswordCreationLinkSchemaRequest = z.object({
  token: z.string(),
})

export type SignInCustomerResponse = z.infer<typeof SignInCustomerSchemaResponse>
export type SignInCustomerRequest = z.infer<typeof SignInBuyerSchemaRequest>
export type ForgotBuyerPasswordRequest = z.infer<typeof ForgotBuyerPasswordSchemaRequest>
export type ResetBuyerPasswordRequest = z.infer<typeof ResetBuyerPasswordSchemaRequest>
export type ResendNewPasswordCreationLinkRequest = z.infer<
  typeof ResendNewPasswordCreationLinkSchemaRequest
>
export type CreateBuyerAccountRequest = z.infer<typeof CreateBuyerAccountSchemaRequest>
