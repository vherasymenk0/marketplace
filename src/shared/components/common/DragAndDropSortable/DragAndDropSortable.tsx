import { Box, GridProps, Stack } from '@mui/material'

import { GridListProps } from '~/shared/components/base/GridList'

import { DragAndDropSortableItem } from './DragAndDropSortableItem'
import { DragAndDropSortableProvider } from './DragAndDropSortableProvider'

export interface DragAndDropSortableProps<
  T extends { id: string | number } = { id: string | number },
> {
  items: T[]
  delayPress?: number
  spacing?: GridProps['spacing']
  renderItem: GridListProps<T>['renderItem']
  onChangePosition: (items: T[]) => void
}

export const DragAndDropSortable = <T extends { id: string | number } = { id: string | number }>({
  items,
  delayPress,
  spacing = 0,
  renderItem,
  onChangePosition,
}: DragAndDropSortableProps<T>) => (
  <DragAndDropSortableProvider
    value={items || []}
    onChange={onChangePosition}
    delayPress={delayPress}
  >
    <Stack direction="row" gap={spacing} flexWrap="wrap">
      {items.map((item, index) => (
        <Box key={item.id} sx={{ cursor: 'grab' }}>
          <DragAndDropSortableItem id={item.id ? item.id : String(index)}>
            {renderItem(item, index)}
          </DragAndDropSortableItem>
        </Box>
      ))}
    </Stack>
  </DragAndDropSortableProvider>
)
