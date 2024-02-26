import { GridList, GridListProps } from '~/shared/components/base/GridList'
import { isOfType } from '~/shared/helpers/isOfType'
import { FileModel } from '~/shared/services/uploadFile'

import { useDropzoneContext } from '../../base/Dropzone'
import { UploadFileCard } from '../../cards/UploadFileCard'
import { DragAndDropSortable } from '../DragAndDropSortable'

export interface UploadFileListProps {
  isDnd?: boolean
  spacing?: GridListProps<FileModel>['spacing']
  columns?: GridListProps<FileModel>['columns']
  isError?: boolean
}

export const UploadFileList = ({
  isDnd,
  columns = 1,
  spacing = 2,
  isError,
}: UploadFileListProps) => {
  const { value, changeFilePosition, deleteFile } = useDropzoneContext()

  const renderItem = (item: FileModel) => (
    <UploadFileCard
      id={item.id}
      size={item.size ?? 0}
      name={item.name ?? ''}
      isLoading={item.loading}
      onDelete={deleteFile}
      isError={isError}
    />
  )

  if (isOfType.array(value) && value.length) {
    if (isDnd) {
      return (
        <DragAndDropSortable
          items={value}
          onChangePosition={changeFilePosition}
          spacing={spacing}
          renderItem={renderItem}
        />
      )
    }

    return (
      <GridList
        items={value}
        spacing={spacing}
        columns={columns}
        renderItem={(item) => renderItem(item)}
      />
    )
  }

  if (!isOfType.array(value) && value) {
    return renderItem(value)
  }

  return null
}
