'use client'

import { Box, Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import WantToSellImage from '~/shared/assets/images/want-to-sell-image.png'
import { Button } from '~/shared/components/base/Button'
import { CSSHide } from '~/shared/components/base/CSSHide'
import { Image } from '~/shared/components/base/Image'
import { Text } from '~/shared/components/base/Text'
import { useRouter } from '~/shared/hooks/useRouter'

import { BannerTemplate } from '../../BannerTemplate'

import { useStyles } from './WantToSellSection.styles'

export const WantToSellSection = () => {
  const router = useRouter()
  const styles = useStyles()

  return (
    <BannerTemplate>
      <Box sx={styles.container}>
        <Stack maxWidth={{ xs: '100%', md: '50%' }} gap={4}>
          <Stack gap={1}>
            <Text variant="h4" color="grey.25">
              <FormattedMessage
                defaultMessage="Want to Sell?"
                id="homePage.wantToSellSection.title"
              />
            </Text>

            <Text variant="body2" color="grey.200">
              <FormattedMessage
                defaultMessage="Welcome to Nextor where opportunities await for vendors like you to thrive. By registering on our platform, you gain access to a vast audience eager to discover and purchase unique products."
                id="homePage.wantToSellSection.description"
              />
            </Text>
          </Stack>

          <Button
            variant="outlined"
            sx={{ color: 'grey.25', borderColor: 'grey.25', width: 184 }}
            onClick={() => router.push('/vendor/sign-up')}
          >
            <FormattedMessage
              defaultMessage="Join as Vendor"
              id="homePage.wantToSellSection.action"
            />
          </Button>
        </Stack>

        <CSSHide screen="desktop">
          <Image
            alt="man"
            src={WantToSellImage.src}
            sizes="600px"
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              bottom: -20,
            }}
          />
        </CSSHide>

        <CSSHide screen="mobile">
          <Image
            alt="man"
            src={WantToSellImage.src}
            sizes="600px"
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
            }}
          />
        </CSSHide>
      </Box>
    </BannerTemplate>
  )
}
