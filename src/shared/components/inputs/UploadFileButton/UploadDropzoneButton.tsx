import { Button } from '~/shared/components/base/Button'
import { isOfType } from '~/shared/helpers/isOfType'

import { DropzoneButtonInput, useDropzoneContext } from '../../base/Dropzone'

export interface UploadDropzoneButtonProps {
  isError?: boolean
  title?: string
  dataTestId?: string
}

export const UploadDropzoneButton = ({
  isError = false,
  title = 'Choose File',
  dataTestId,
}: UploadDropzoneButtonProps) => {
  const { value } = useDropzoneContext()
  const isLoading = isOfType.object(value) ? value.loading : null

  if (isOfType.boolean(isLoading)) return null

  return (
    <DropzoneButtonInput isError={isError} dataTestId={dataTestId}>
      <Button color="secondary" size="medium">
        {title}
      </Button>
    </DropzoneButtonInput>
  )
}
