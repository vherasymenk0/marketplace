import { z } from 'zod'

export const appConfigSchema = z
  .object({
    env: z.enum(['local', 'staging', 'production', 'test']),
    apiURL: z.string(),
    appURL: z.string(),
    mocksEnabled: z.boolean().default(false),
    private: z.object({
      sentryDNS: z.string().optional(),
      sentryAuthToken: z.string().optional(),
      gtmID: z.string().optional(),
      nextAuthSecret: z.string(),
      nextAuthUrl: z.string(),
    }),
  })
  .strict()

export type AppConfig = z.infer<typeof appConfigSchema>
export type RequiredConfig = Optional<AppConfig, KeysWithFallbackValue>

type KeysWithFallbackValue = 'mocksEnabled'
type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>
