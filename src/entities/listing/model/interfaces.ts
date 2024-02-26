import { QueryParams } from '~/shared/types/search'

import { ListingModel } from './listing'

export interface MyListingsSearchParams extends QueryParams {
  filter_by_status?: ListingModel['status']
  filter_by_query?: string
  sort_by_created_at?: string
  sort_by_price?: string
}
