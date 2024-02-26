'use client'

import { Box, FormHelperText, Stack } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { FormattedMessage } from 'react-intl'

import { ResendBuyerVerification, VerifyBuyerCodeInput } from '~/features/auth'

import ConvertIcon from '~/shared/assets/icons/convert.svg'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'
import { IconShape } from '~/shared/components/common/IconShape'

import { useStyles } from './VerifyBuyerAccount.styles'

export const VerifyBuyerAccount = () => {
  const router = useRouter()
  const styles = useStyles()
  const { data } = useSession()

  useEffect(() => {
    router.prefetch('/sign-up/success')
  }, [router])

  return (
    <Stack sx={styles.wrapper}>
      <IconShape>
        <SvgIcon icon={ConvertIcon} size={40} stroke="primary.dark" />
      </IconShape>
      <Text variant="h4" sx={styles.title}>
        <FormattedMessage id="buyer.verify.email" defaultMessage="Verify Your Email" />
      </Text>
      <FormHelperText sx={styles.helperText}>
        <Text variant="body3">
          <FormattedMessage
            id="buyer.verify.code"
            defaultMessage="Enter a 6-digit code we sent to"
          />
        </Text>
      </FormHelperText>
      <Text variant="subtitle2" sx={{ mt: 1 }}>
        {data?.apiTokenValues?.email}
      </Text>
      <Box sx={{ mt: { xs: 4, md: 5 } }}>
        <VerifyBuyerCodeInput />
      </Box>
      <Box sx={styles.resend}>
        <ResendBuyerVerification />
      </Box>
    </Stack>
  )
}
