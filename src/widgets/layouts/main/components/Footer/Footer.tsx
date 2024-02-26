'use client'

import { Stack } from '@mui/material'
import { useIntl } from 'react-intl'

import { NextLink } from '~/shared/components/base/NextLink'
import { Text } from '~/shared/components/base/Text'
import { Logo } from '~/shared/components/common/Logo'

import { useStyles } from './Footer.styles'

export const Footer = () => {
  const styles = useStyles()
  const intl = useIntl()

  return (
    <Stack sx={styles.wrapper}>
      <Stack justifyContent="space-between">
        <Logo sx={styles.logo} variant="light" />
        <Text variant="body4" sx={styles.copyright} display={{ xs: 'none', md: 'block' }}>
          {intl.formatMessage({ id: 'footer.copyright', defaultMessage: 'Copyright ©2024' })}
        </Text>
      </Stack>
      <Stack sx={styles.rightContent}>
        <Stack sx={styles.menu}>
          <Text variant="subtitle3" sx={styles.title}>
            {intl.formatMessage({ id: 'footer.company', defaultMessage: 'Company' })}
          </Text>
          <Text variant="body4" sx={styles.item}>
            <NextLink href="/about">
              {intl.formatMessage({ id: 'footer.aboutUs', defaultMessage: 'About Us' })}
            </NextLink>
          </Text>
          <Text variant="body4" sx={styles.item}>
            <NextLink href="/contact">
              {intl.formatMessage({ id: 'footer.contactUs', defaultMessage: 'Contact Us' })}
            </NextLink>
          </Text>
        </Stack>
        <Stack sx={styles.menu}>
          <Text variant="subtitle3" sx={styles.title}>
            {intl.formatMessage({ id: 'footer.legal', defaultMessage: 'Legal' })}
          </Text>
          <Text variant="body4" sx={styles.item}>
            <NextLink href="/terms">
              {intl.formatMessage({ id: 'footer.termsOfUse', defaultMessage: 'Terms of Use' })}
            </NextLink>
          </Text>
          <Text variant="body4" sx={styles.item}>
            <NextLink href="/privacy">
              {intl.formatMessage({ id: 'footer.privacy', defaultMessage: 'Privacy Policy' })}
            </NextLink>
          </Text>
        </Stack>
      </Stack>
      <Stack sx={styles.mobileCopyright}>
        <Text variant="body4" sx={styles.copyright}>
          {intl.formatMessage({ id: 'footer.copyright', defaultMessage: 'Copyright ©2024' })}
        </Text>
      </Stack>
    </Stack>
  )
}
