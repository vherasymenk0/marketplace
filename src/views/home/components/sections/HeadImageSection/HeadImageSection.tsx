import { Box } from '@mui/material'
import Image from 'next/image'
import { FormattedMessage } from 'react-intl'

import MainImage from '~/shared/assets/images/home-page-main-image.png'
import { Text } from '~/shared/components/base/Text'

import { useStyles } from './HeadImageSection.styles'

export const HeadImageSection = () => {
  const styles = useStyles()

  return (
    <Box sx={styles.container}>
      <Text variant="h2" color="grey.25" sx={{ maxWidth: 1014, textAlign: 'center', zIndex: 1 }}>
        <FormattedMessage
          defaultMessage="Nextor - Your Top Choice for Quality Auto Parts"
          id="homePage.headImageTitle"
        />
      </Text>

      <Image
        alt="main image"
        src={MainImage.src}
        sizes="600px"
        style={{
          objectFit: 'cover',
        }}
        layout="fill"
      />
    </Box>
  )
}
