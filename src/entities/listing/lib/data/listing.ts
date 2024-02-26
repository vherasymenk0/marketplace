import { SEARCH_PARAMS } from '~/shared/constants/constants'

export const LISTING_STATUSES = {
  draft: 'draft',
  active: 'active',
  pending: 'pending_approval',
  deactivated: 'deactivated',
} as const

export const LISTING_STATUSES_ENUM = [
  LISTING_STATUSES.active,
  LISTING_STATUSES.deactivated,
  LISTING_STATUSES.draft,
  LISTING_STATUSES.pending,
] as const

export const LISTING_SORT_OPTIONS = {
  [SEARCH_PARAMS.byCreatedAt]: [
    {
      value: 'asc',
      label: {
        defaultMessage: 'Newest',
        id: 'myListings.sort.newest',
      },
    },
    {
      value: 'desc',
      label: {
        defaultMessage: 'Oldest',
        id: 'myListings.sort.oldest',
      },
    },
  ],
  [SEARCH_PARAMS.byPrice]: [
    {
      value: 'asc',
      label: {
        defaultMessage: 'Price: Low to High',
        id: 'myListings.sort.price.lowToHigh',
      },
    },
    {
      value: 'desc',
      label: {
        defaultMessage: 'Price: High to Low',
        id: 'myListings.sort.price.highToLow',
      },
    },
  ],
}
