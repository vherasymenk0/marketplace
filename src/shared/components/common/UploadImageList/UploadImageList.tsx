import { Stack } from '@mui/material'

import { GridListProps } from '~/shared/components/base/GridList'
import { isOfType } from '~/shared/helpers/isOfType'
import { FileModel } from '~/shared/services/uploadFile'

import { useDropzoneContext } from '../../base/Dropzone'
import { UploadImageCard } from '../../cards/UploadImageCard'
import { DragAndDropSortable } from '../DragAndDropSortable'

export interface UploadImageListProps {
  isDnd?: boolean
  spacing?: GridListProps<FileModel>['spacing']
  renderImage?: (src: string, alt: string) => React.ReactNode
}

export const UploadImageList = ({ isDnd, spacing = 2, renderImage }: UploadImageListProps) => {
  const { isDisabled, value, changeFilePosition, deleteFile } = useDropzoneContext()

  const renderItem = (item: FileModel, idx: number) => {
    return (
      <UploadImageCard
        id={item.id}
        src={item.url}
        alt={item.name}
        isCover={!item.error && !item.loading && idx === 0}
        isLoading={item.loading ?? false}
        isError={!!item.error}
        isDisabled={isDisabled}
        onDelete={deleteFile}
        renderImage={renderImage}
      />
    )
  }

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
      <Stack direction="row" gap={1} flexWrap="wrap">
        {value.map(renderItem)}
      </Stack>
    )
  }

  if (!isOfType.array(value) && value) {
    return renderItem(value, 0)
  }

  return null
}
