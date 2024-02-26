import { api } from '~/shared/services/api'
import { RequestOptions } from '~/shared/services/fetch'

import { UploadFileSchemaResponse } from '../model/attachments'

export interface UploadOptions extends Pick<RequestOptions, 'authorizeToken'> {
  endpoint: string
}

export const uploadFile = async (file: File, { endpoint, ...options }: UploadOptions) => {
  const bodyFormData = new FormData()

  bodyFormData.set('file', file)

  const res = await api.post(endpoint, {
    body: bodyFormData,
    headers: {
      Accept: '*/*',
      Authorization: `Bearer ${options.authorizeToken}`,
    },
  })

  const { data, url } = UploadFileSchemaResponse.parse(res)

  return {
    attachment: JSON.stringify(data),
    url,
  }
}
