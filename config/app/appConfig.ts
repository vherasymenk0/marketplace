import { createLocalConfig } from './envs/local'
import { createProductionConfig } from './envs/production'
import { createStagingConfig } from './envs/staging'
import { createTestConfig } from './envs/test'

const getConfig = () => {
  switch (process.env.APP_ENV) {
    case 'production':
      return createProductionConfig()
    case 'staging':
      return createStagingConfig()
    case 'local':
      return createLocalConfig()
    case 'test':
      return createTestConfig()
    default:
      throw new Error(`Invalid APP_ENV "${process.env.APP_ENV}"`)
  }
}

export const appConfig = getConfig()
