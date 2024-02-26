'use client'

import { Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import { useCookieConsent } from '~/features/cookieConsent'

import CookieIcon from '~/shared/assets/icons/cookie.svg'
import { Button } from '~/shared/components/base/Button'
import { NextLink } from '~/shared/components/base/NextLink'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'

import { useStyles } from './CookieBanner.styles'

export const CookieBanner = () => {
  const { showCookieBanner, handleAccept, handleDecline } = useCookieConsent()
  const styles = useStyles()

  if (!showCookieBanner) return null

  return (
    <Stack sx={styles.root}>
      <Stack direction="row" gap={0.5} mb={1}>
        <SvgIcon icon={CookieIcon} color="primary.main" />
        <Text variant="subtitle2" color="grey.900">
          <FormattedMessage id="cookieConsent.title" defaultMessage="Cookies" />
        </Text>
      </Stack>
      <Text variant="body3" color="grey.600">
        <FormattedMessage
          id="cookieConsent.text"
          defaultMessage="We baked some cookies that you have to accept, if you want to enjoy this website. Cookies help us deliver the best experience on our website. For additional information, please see our {link}."
          values={{
            link: (
              <NextLink href="/policy" color="info.main">
                <FormattedMessage defaultMessage="Cookie Policy" id="cookieConsent.link" />
              </NextLink>
            ),
          }}
        />
      </Text>
      <Stack sx={styles.footer}>
        <Button variant="outlined" sx={{ order: { xs: 1, md: 0 } }} onClick={handleDecline}>
          <FormattedMessage id="cookieConsent.btn.decline" defaultMessage="Decline" />
        </Button>
        <Button onClick={handleAccept}>
          <FormattedMessage id="cookieConsent.btn.accept" defaultMessage="Accept" />
        </Button>
      </Stack>
    </Stack>
  )
}
