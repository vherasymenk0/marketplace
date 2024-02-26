import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

interface DragAndDropSortableItemProps {
  id: string | number
  children: React.ReactNode
}

export const DragAndDropSortableItem = ({
  children,
  id,
}: DragAndDropSortableItemProps): JSX.Element => {
  const { attributes, listeners, transform, transition, setNodeRef } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  )
}
