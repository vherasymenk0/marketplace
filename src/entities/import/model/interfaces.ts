import { QueryParams } from '~/shared/types/search'

import { ImportListingStatus } from './imports'

export interface MyImportsSearchParams extends QueryParams {
  filter_by_status?: ImportListingStatus
  sort_by_created_at?: string
  sort_by_status?: string
}
