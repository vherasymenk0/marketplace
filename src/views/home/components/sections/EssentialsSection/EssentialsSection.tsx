import { Box, Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import WheelsImage from '~/shared/assets/images/wheels.png'
import { CSSHide } from '~/shared/components/base/CSSHide'
import { Image } from '~/shared/components/base/Image'
import { Text } from '~/shared/components/base/Text'

import { BannerTemplate } from '../../BannerTemplate'

import { useStyles } from './EssentialsSection.styles'

export const EssentialsSection = () => {
  const styles = useStyles()

  return (
    <BannerTemplate>
      <Box sx={styles.container}>
        <Stack maxWidth={{ xs: '100%', md: '50%' }} gap={1}>
          <Stack direction="row" gap={1}>
            <Text variant="h4" color="grey.25">
              <FormattedMessage defaultMessage="Essentials" id="homePage.essentialsSection.title" />
            </Text>

            <Stack sx={styles.content}>
              <Text variant="body5" color="grey.25">
                <FormattedMessage
                  defaultMessage="Free Shipping"
                  id="homePage.essentialsSection.title.tip"
                />
              </Text>
            </Stack>
          </Stack>

          <Text variant="body2" color="grey.200">
            <FormattedMessage
              defaultMessage="Unleash the full potential of your vehicle with Nextor – your ultimate destination for premium auto parts. Elevate your driving experience by choosing from our extensive selection of essential components, each carefully curated to enhance your vehicle's performance."
              id="homePage.essentialsSection.description"
            />
          </Text>
        </Stack>

        <CSSHide screen="desktop">
          <Image
            alt="wheels"
            src={WheelsImage.src}
            sizes="600px"
            height={140}
            width={230}
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
            }}
          />
        </CSSHide>

        <CSSHide screen="mobile">
          <Image
            alt="wheels"
            src={WheelsImage.src}
            sizes="600px"
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
            }}
          />
        </CSSHide>
      </Box>
    </BannerTemplate>
  )
}
