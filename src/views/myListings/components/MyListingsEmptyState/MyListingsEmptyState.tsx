import { Stack } from '@mui/material'

import { LISTING_STATUSES, ListingModel } from '~/entities/listing'

import { EmptyStateApproval } from '../EmptyStateApproval'
import { EmptyStateDeactivated } from '../EmptyStateDeactivated'
import { EmptyStateWithImport } from '../EmptyStateWithImport'

import { useStyles } from './MyListingsEmptyState.styles'

const emptyStateVariants: Record<ListingModel['status'], JSX.Element> = {
  active: <EmptyStateWithImport />,
  draft: <EmptyStateWithImport />,
  pending_approval: <EmptyStateApproval />,
  deactivated: <EmptyStateDeactivated />,
}

interface Props {
  currentTab?: ListingModel['status']
}

export const MyListingsEmptyState = ({ currentTab = LISTING_STATUSES.active }: Props) => {
  const styles = useStyles()

  return (
    <Stack sx={styles.container}>
      {emptyStateVariants[currentTab] || emptyStateVariants.active}
    </Stack>
  )
}
