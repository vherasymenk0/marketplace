'use client'

import { Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import ThinCheckIcon from '~/shared/assets/icons/thin-check-icon.svg'
import { Button } from '~/shared/components/base/Button'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'
import { IconShape } from '~/shared/components/common/IconShape'

import { useStyles } from './AuthBuyerSuccess.styles'

export const AuthBuyerSuccess = () => {
  const styles = useStyles()

  return (
    <Stack sx={styles.pageContainer}>
      <IconShape>
        <SvgIcon icon={ThinCheckIcon} size={32} stroke="primary.dark" />
      </IconShape>
      <Text variant="h4" sx={styles.title}>
        <FormattedMessage id="buyer.signup.success.title" defaultMessage="Congratulations!" />
      </Text>
      <Text variant="body3" sx={styles.subtitle}>
        <FormattedMessage
          id="buyer.signup.success.title"
          defaultMessage="Your account has been successfully created. Now you can sign in."
        />
      </Text>
      <Button sx={{ width: { xs: '100%', md: 200 }, mt: 4 }} href="/sign-in">
        <FormattedMessage id="buyer.signup.success.btn" defaultMessage="Sign in" />
      </Button>
    </Stack>
  )
}
