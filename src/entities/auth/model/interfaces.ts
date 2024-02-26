import { UserModel } from '~/entities/user'

export interface UpdateAuthSession {
  apiToken?: string
  user?: UserModel
}
