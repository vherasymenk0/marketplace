'use client'

import { Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import MailIcon from '~/shared/assets/icons/email-icon.svg'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'
import { IconShape } from '~/shared/components/common/IconShape'

import { useStyles } from './VendorRequestSent.styles'

export const VendorRequestSent = () => {
  const styles = useStyles()

  return (
    <Stack sx={styles.container}>
      <IconShape>
        <SvgIcon icon={MailIcon} size={32} stroke="primary.dark" />
      </IconShape>

      <Text variant="h4" mt={3} color="grey.900">
        <FormattedMessage
          defaultMessage="Your request has been successfully sent!"
          id="vendor.signup.requestSent.title"
        />
      </Text>

      <Text variant="body3" mt={2} color="grey.600">
        <FormattedMessage
          defaultMessage="We're excited to have you join us, our specialist will contact you soon."
          id="vendor.signup.requestSent.description"
        />
      </Text>
    </Stack>
  )
}
