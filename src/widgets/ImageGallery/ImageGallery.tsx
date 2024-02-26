// import useModal from 'app/hooks/useModal'
import { Box, Stack, Theme, useMediaQuery } from '@mui/material'
import { useMemo, useState } from 'react'

import { ListingModel } from '~/entities/listing'

import { Image } from '~/shared/components/base/Image'
import { Text } from '~/shared/components/base/Text'
import { ImageGalleryDialog } from '~/shared/components/common/ImageGalleryDialog'
import { useBoolean } from '~/shared/hooks/useBoolean'

import { useStyles } from './ImageGallery.styles'

interface ImageGalleryProps {
  images: ListingModel['listingImages']
}

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const styles = useStyles()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isOpen, { off, on }] = useBoolean(false)

  const sortedImages = images.sort((a, b) => a.position - b.position)
  const mainImage = useMemo(() => sortedImages[activeIndex], [sortedImages, activeIndex])

  const showedImagesCount = isMobile ? 4 : 6

  const haveRestImages = sortedImages.length > showedImagesCount

  const restImages = sortedImages.slice(0, showedImagesCount)
  const restImagesCount = images.length - restImages.length + 1

  const handleSelectImage = (index: number) => {
    setActiveIndex(index)
  }

  const handleCloseDialog = () => {
    off()
  }

  return (
    <>
      <Stack sx={styles.root}>
        <Stack
          direction={{ xs: 'row', md: 'column' }}
          gap={{ xs: haveRestImages ? 0 : 2, md: 2 }}
          justifyContent={{ xs: haveRestImages ? 'space-between' : 'flex-start', md: 'flex-start' }}
        >
          {restImages.map((image, index) => {
            const isActive = index === activeIndex

            return (
              <Box
                key={image.id}
                sx={(theme) => ({
                  ...styles.imageContainer,
                  height: 80,
                  minHeight: 80,
                  width: 80,
                  ...(isActive && { border: `2px solid ${theme.palette.primary.main}` }),
                })}
              >
                <>
                  <Image
                    src={image?.imageUrl}
                    sizes="240px"
                    width="100%"
                    height="100%"
                    style={{
                      objectFit: 'cover',
                    }}
                    onClick={() => handleSelectImage(index)}
                  />

                  {haveRestImages && index === restImages.length - 1 ? (
                    <Text sx={styles.restImagesCount} variant="subtitle2" onClick={on}>
                      +{restImagesCount}
                    </Text>
                  ) : null}
                </>
              </Box>
            )
          })}
        </Stack>

        <Box
          sx={{
            ...styles.imageContainer,
            height: { xs: 358, md: 560 },
            minHeight: { xs: 358, md: 560 },
            width: { xs: '100%', md: 496 },
          }}
        >
          <Image
            src={mainImage?.imageUrl}
            sizes="496px"
            width="100%"
            height="100%"
            style={{
              objectFit: 'cover',
            }}
            onClick={on}
          />
        </Box>
      </Stack>

      {isOpen ? (
        <ImageGalleryDialog
          open={isOpen}
          onClose={handleCloseDialog}
          items={
            images.map((item) => ({
              url: item.imageUrl,
            })) || []
          }
          showNav={!isMobile}
          index={activeIndex}
        />
      ) : null}
    </>
  )
}
