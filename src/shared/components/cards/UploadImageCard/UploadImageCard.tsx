import { Box, CircularProgress, IconButton } from '@mui/material'
import { ReactNode } from 'react'

import CloseIcon from '~/shared/assets/icons/close.svg'
import TriangleIcon from '~/shared/assets/icons/triangle-warning.svg'
import { AspectRatio } from '~/shared/components/base/AspectRatio'
import { Image, ImageProps } from '~/shared/components/base/Image'

import { SvgIcon } from '../../base/SvgIcon'
import { Text } from '../../base/Text'

import { useStyles } from './UploadImageCard.styles'

interface UploadImageCardProps {
  id: string | number
  ratio?: number
  src: ImageProps['src']
  alt: ImageProps['alt']
  isCover: boolean
  isLoading: boolean
  isError: boolean
  isDisabled: boolean
  onDelete?: (id: string) => void
  renderImage?: ((src: string, alt: string) => ReactNode) | undefined
}

export const UploadImageCard = ({
  id,
  src = '',
  alt = '',
  ratio = 4 / 3,
  isCover,
  isDisabled,
  isLoading = false,
  isError,
  onDelete,
  renderImage,
}: UploadImageCardProps) => {
  const styles = useStyles({ isLoading, isError, isCover })
  const showDeleteButton = !isDisabled && !isLoading
  const showErrorIcon = isError && !isLoading

  return (
    <AspectRatio className="tick-tack" sx={styles.root} ratio={ratio}>
      <>
        {renderImage ? (
          renderImage(src, alt)
        ) : (
          <Image src={src} alt={alt} width="100%" height="100%" sx={styles.image} />
        )}

        {isCover ? (
          <Box sx={styles.coverTextContainer}>
            <Text variant="body5">Cover</Text>
          </Box>
        ) : null}

        {showDeleteButton ? (
          <IconButton
            onClick={() => {
              onDelete?.(String(id))
            }}
            sx={styles.deleteButton}
            className="delete-button"
            data-testid="delete-button"
          >
            <SvgIcon icon={CloseIcon} size={14} />
          </IconButton>
        ) : null}

        {isLoading ? (
          <Box sx={styles.loadingIconContainer}>
            <CircularProgress size={20} color="secondary" />
          </Box>
        ) : null}

        {showErrorIcon ? <SvgIcon icon={TriangleIcon} sx={styles.errorIcon} /> : null}
      </>
    </AspectRatio>
  )
}
