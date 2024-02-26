import type { ResponsiveStyleValue } from '@mui/system'

import { isOfType } from '~/shared/helpers/isOfType'

export const MAX_COLUMNS = 12

export const getColumns = (columns: ResponsiveStyleValue<number>) => {
  if (isOfType.object(columns)) {
    return Object.entries(columns).reduce(
      (acc, [key, value]) => ({ ...acc, [key]: MAX_COLUMNS / (value ?? 0) }),
      {},
    )
  }

  return { xs: MAX_COLUMNS / ((columns as number) ?? 0) }
}

export const defaultKeyExtractor = (item: { id?: string | number }) => item?.id ?? ''
