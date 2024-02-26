import { type RequiredConfig, appConfigSchema } from './types'

export const defineConfig = (config: RequiredConfig) => appConfigSchema.parse(config)
