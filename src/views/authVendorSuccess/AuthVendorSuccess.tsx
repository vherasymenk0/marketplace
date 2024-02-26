'use client'

import { Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import ThinCheckIcon from '~/shared/assets/icons/thin-check-icon.svg'
import { Button } from '~/shared/components/base/Button'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'
import { IconShape } from '~/shared/components/common/IconShape'

import { useStyles } from './AuthVendorSuccess.styles'

export const AuthVendorSuccess = () => {
  const styles = useStyles()

  return (
    <Stack sx={styles.pageContainer}>
      <IconShape>
        <SvgIcon icon={ThinCheckIcon} size={32} stroke="primary.dark" />
      </IconShape>

      <Text variant="h4" sx={styles.title}>
        <FormattedMessage defaultMessage="Congratulations!" id="vendor.signup.success.title" />
      </Text>

      <Text variant="body3" sx={styles.description}>
        <FormattedMessage
          defaultMessage="Your password has been successfully created. Now you can sign in."
          id="vendor.signup.success.description"
        />
      </Text>

      <Button href="/vendor/sign-in" sx={styles.signInBtn}>
        <FormattedMessage defaultMessage="Sign in" id="vendor.signup.success.button" />
      </Button>
    </Stack>
  )
}
