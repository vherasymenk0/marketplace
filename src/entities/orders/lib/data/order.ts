import { SEARCH_PARAMS } from '~/shared/constants/constants'

export const ORDER_STATUSES = {
  draft: 'draft',
  processing: 'processing',
  sentToBuyer: 'sent_to_buyer',
} as const

export const ORDER_STATUSES_ENUM = [
  ORDER_STATUSES.draft,
  ORDER_STATUSES.processing,
  ORDER_STATUSES.sentToBuyer,
] as const

export const ORDER_SORT_OPTIONS = {
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
}

export const STATUS_OPTIONS = [
  {
    label: 'Processing',
    value: ORDER_STATUSES.processing,
  },
  {
    label: 'Sent To Buyer',
    value: ORDER_STATUSES.sentToBuyer,
  },
]
