import { z } from 'zod'

export const AuthSchemaResponse = z
  .object({
    token: z.string(),
  })
  .strict()

export const JWTSchemaResponse = z.object({
  id: z.number(),
  email: z.string().email(),
  type: z.enum(['vendor', 'user']),
  exp: z.number(),
})

export const VerifyEmailCodeSchemaRequest = z.object({
  user: z.object({
    verification_code: z.number(),
  }),
})

export type AuthResponse = z.infer<typeof AuthSchemaResponse>
export type JWTResponse = z.infer<typeof JWTSchemaResponse>

export type VerifyEmailCodeRequest = z.infer<typeof VerifyEmailCodeSchemaRequest>
