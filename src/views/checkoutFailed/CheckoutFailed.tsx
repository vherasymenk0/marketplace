'use client'

import { Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import FailedIcon from '~/shared/assets/icons/failed.svg'
import { Button } from '~/shared/components/base/Button'
import { Paper } from '~/shared/components/base/Paper'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'
import { IconShape } from '~/shared/components/common/IconShape'
import { useRouter } from '~/shared/hooks/useRouter'

export const CheckoutFailed = () => {
  const router = useRouter()

  return (
    <Stack height="100%" justifyContent="center" alignItems="center">
      <Paper>
        <IconShape>
          <SvgIcon icon={FailedIcon} size={32} stroke="primary.dark" />
        </IconShape>
        <Text variant="h4" color="grey.900" mt={3}>
          <FormattedMessage id="checkoutFailed.title" defaultMessage="Oops! Payment Failed" />
        </Text>
        <Text variant="body3" color="grey.600" mt={2} mb={4}>
          <FormattedMessage
            id="checkoutFailed.text"
            defaultMessage="Payment for order could not be proceed. Try again"
          />
        </Text>
        <Button onClick={() => router.push('/cart')} sx={{ minWidth: { xs: '100%', md: 164 } }}>
          <FormattedMessage id="checkoutFailed.btn" defaultMessage="Go to Cart" />
        </Button>
      </Paper>
    </Stack>
  )
}
