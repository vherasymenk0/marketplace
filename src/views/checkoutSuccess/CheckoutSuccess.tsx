'use client'

import { Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import CheckIcon from '~/shared/assets/icons/thin-check-icon.svg'
import { Button } from '~/shared/components/base/Button'
import { Paper } from '~/shared/components/base/Paper'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'
import { IconShape } from '~/shared/components/common/IconShape'
import { useRouter } from '~/shared/hooks/useRouter'

export const CheckoutSuccess = () => {
  const router = useRouter()

  return (
    <Stack height="100%" justifyContent="center" alignItems="center">
      <Paper>
        <IconShape>
          <SvgIcon icon={CheckIcon} size={32} stroke="primary.dark" />
        </IconShape>
        <Text variant="h4" color="grey.900" mt={3}>
          <FormattedMessage id="checkoutSuccess.title" defaultMessage="Congratulations!" />
        </Text>
        <Text variant="body3" color="grey.600" mt={2} mb={4}>
          <FormattedMessage
            id="checkoutSuccess.text"
            defaultMessage="Your recent purchase has been successfully processed. We are thrilled to confirm that the products you selected are on their way to you. Thank you for choosing us for your needs."
          />
        </Text>
        <Button onClick={() => router.push('/orders')} sx={{ minWidth: { xs: '100%', md: 164 } }}>
          <FormattedMessage id="checkoutSuccess.btn" defaultMessage="Go to My Orders" />
        </Button>
      </Paper>
    </Stack>
  )
}
