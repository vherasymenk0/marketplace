import { Box, Modal } from '@mui/material'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import 'react-image-gallery/styles/css/image-gallery.css'

import CloseIcon from '~/shared/assets/icons/close.svg'

import { AspectRatio } from '../../base/AspectRatio'
import { Image } from '../../base/Image'
import { InlineTextButton } from '../../base/InlineTextButton'
import { SvgIcon } from '../../base/SvgIcon'

import { useStyles } from './ImageGalleryDialog .styles'

const ReactImageGallery = dynamic(() => import('react-image-gallery').then((mod) => mod.default))

export interface ImageGalleryDialogProps {
  open: boolean
  items: { url: string }[]
  index?: number
  showNav?: boolean
  onClose: () => void
}

export const ImageGalleryDialog = ({
  open,
  items,
  index,
  showNav,
  onClose,
}: ImageGalleryDialogProps) => {
  const styles = useStyles()

  const elements = useMemo(() => {
    const preparedItems = items?.map((item) => ({
      original: item?.url,
      thumbnail: item?.url,
    }))

    return preparedItems
  }, [items])

  return (
    <Modal open={open} sx={styles.modal}>
      <Box sx={styles.root}>
        <InlineTextButton sx={styles.closeButton} onClick={onClose}>
          <SvgIcon icon={CloseIcon} color="white" size={32} />
        </InlineTextButton>

        <ReactImageGallery
          startIndex={index}
          lazyLoad
          showFullscreenButton={false}
          showPlayButton={false}
          items={elements}
          showNav={showNav}
          renderItem={(rest) => (
            <AspectRatio
              ratio={4 / 3}
              sx={{
                width: '100%',
                maxHeight: '80vh',
                position: 'relative',
                margin: '0 auto',
                height: { xs: '100vh', md: 'inherit' },
              }}
            >
              <Image
                src={rest.original}
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                width="100%"
                height="100%"
              />
            </AspectRatio>
          )}
          renderThumbInner={(item) => {
            return (
              <AspectRatio ratio={1 / 1} sx={{ width: '100%', position: 'relative' }}>
                <Image
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                  src={item.thumbnail}
                  alt={item.thumbnailAlt}
                  sizes="300px"
                  width="100%"
                  height="100%"
                />
              </AspectRatio>
            )
          }}
        />
      </Box>
    </Modal>
  )
}
