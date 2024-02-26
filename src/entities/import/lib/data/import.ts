const IMPORT_LISTING_STATUSES = {
  imported: 'imported',
  failed: 'failed',
  in_progress: 'in_progress',
} as const

export const IMPORT_LISTING_STATUSES_ENUM = [
  IMPORT_LISTING_STATUSES.imported,
  IMPORT_LISTING_STATUSES.failed,
  IMPORT_LISTING_STATUSES.in_progress,
] as const

export const MY_IMPORTS_SEARCH_PARAMS = {
  filterByStatus: 'filter_by_status',
  sortByStatus: 'sort_by_status',
  sortByCreatedAt: 'sort_by_created_at',
} as const

export const LISTING_IMPORT_FILTER_OPTIONS = [
  {
    value: 'all',
    label: {
      id: 'myImports.filter.all',
      defaultMessage: 'All',
    },
  },
  {
    value: IMPORT_LISTING_STATUSES.imported,
    label: {
      id: 'myImports.filter.imported',
      defaultMessage: 'Imported',
    },
  },
  {
    value: IMPORT_LISTING_STATUSES.failed,
    label: {
      id: 'myImports.filter.failed',
      defaultMessage: 'Failed',
    },
  },
] as const
