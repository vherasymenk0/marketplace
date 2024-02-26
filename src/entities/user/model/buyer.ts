import { z } from 'zod'

const BuyerSchemaModel = z.object({
  id: z.number(),
  email: z.string(),
  fullName: z.string(),
  emailVerified: z.boolean(),
  type: z.literal('user'),
})

export const BuyerSchemaRequest = z.object({
  user: BuyerSchemaModel,
})

export type BuyerModel = z.infer<typeof BuyerSchemaModel>
