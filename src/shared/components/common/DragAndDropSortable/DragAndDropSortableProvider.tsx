import {
  DndContext,
  DragEndEvent,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { SortableContext, arrayMove, rectSortingStrategy } from '@dnd-kit/sortable'

interface DragAndDropSortableProviderProps<T extends { id: string | number }> {
  value: T[]
  delayPress?: number
  children: JSX.Element
  onChange: (v: T[]) => void
}

export const DragAndDropSortableProvider = <T extends { id: string | number }>({
  value,
  children,
  delayPress = 200,
  onChange,
}: DragAndDropSortableProviderProps<T>) => {
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        delay: delayPress,
        tolerance: 100,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 100,
      },
    }),
  )

  const handleDragEnd = (event: DragEndEvent): void => {
    const { active, over } = event

    if (active.id !== over?.id) {
      const oldIndex = value.findIndex(({ id }) => String(id) === String(active.id))
      const newIndex = value.findIndex(({ id }) => String(id) === String(over?.id))

      const newItems = arrayMove(value, oldIndex, newIndex)
      onChange(newItems)
    }
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={value.map(({ id }) => id)} strategy={rectSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  )
}
