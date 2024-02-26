'use client'

import { Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import { CreateVendorPasswordForm } from '~/features/auth/createVendorPassword'

import CreatePasswordIcon from '~/shared/assets/icons/create-password-icon.svg'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'
import { IconShape } from '~/shared/components/common/IconShape'

import { useStyles } from './CreateVendorPassword.styles'

export const CreateVendorPassword = () => {
  const styles = useStyles()
  return (
    <Stack sx={styles.container}>
      <IconShape>
        <SvgIcon icon={CreatePasswordIcon} size={32} stroke="primary.dark" />
      </IconShape>

      <Text className="title" variant="h4" sx={styles.title}>
        <FormattedMessage defaultMessage="Create Password" id="createPassword.vendor.title" />
      </Text>

      <CreateVendorPasswordForm />
    </Stack>
  )
}
