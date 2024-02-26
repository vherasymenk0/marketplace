import { FormHelperText } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import { Text } from '~/shared/components/base/Text'

import { useStyles } from './ResendLimitMessage.styles'

export const ResendLimitMessage = ({ show }: { show: boolean }) => {
  const styles = useStyles({ show })

  return (
    <FormHelperText sx={styles.message}>
      <Text variant="body4">
        <FormattedMessage
          id="buyer.signup.verify.resendLimit"
          defaultMessage="Resend limit reached, please wait 60 seconds before trying again"
        />
      </Text>
    </FormHelperText>
  )
}
