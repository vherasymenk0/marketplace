import { Box, Stack } from '@mui/material'

import CloseIcon from '~/shared/assets/icons/close.svg'
import FileIcon from '~/shared/assets/icons/upload-file.svg'
import { IconButton } from '~/shared/components/base/IconButton'
import { Text } from '~/shared/components/base/Text'
import { humanFileSizeFormat } from '~/shared/services/uploadFile'

import { useStyles } from './UploadFileCard.styles'

interface UploadFileCardProps {
  id: string | number
  name: string
  size: number
  isLoading?: boolean | undefined
  isError?: boolean
  onDelete?: (id: string) => void
}

export const UploadFileCard = ({
  id,
  name,
  size,
  isLoading = false,
  isError = false,
  onDelete,
}: UploadFileCardProps) => {
  const styles = useStyles({ isError })
  const formattedSize = humanFileSizeFormat(size)

  return (
    <Box sx={styles.root} title={name}>
      <Stack direction="row" spacing={2} sx={styles.wrapper}>
        <FileIcon />

        <Stack sx={styles.content}>
          <Text noWrap variant="subtitle4" flexGrow={1} sx={styles.title}>
            {name}
          </Text>

          <Text variant="body6" sx={styles.sizeTitle}>
            {formattedSize}
          </Text>
        </Stack>
      </Stack>

      <IconButton
        Icon={<CloseIcon />}
        size="small"
        variant="text"
        color="secondary"
        sx={styles.deleteButton}
        onClick={() => onDelete?.(String(id))}
        loading={isLoading}
      />
    </Box>
  )
}
