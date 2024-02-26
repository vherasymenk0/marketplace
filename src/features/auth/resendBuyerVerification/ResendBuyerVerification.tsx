import { FormHelperText, Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import { ResendLimitMessage } from '~/features/auth/resendLimitMessage'

import { InlineTextButton } from '~/shared/components/base/InlineTextButton'
import { Text } from '~/shared/components/base/Text'

import { useResendBuyerVerification } from './hooks/useResendBuyerVerification'
import { useStyles } from './ResendBuyerVerification.styles'

export const ResendBuyerVerification = () => {
  const { isDisabled, handleClick } = useResendBuyerVerification()
  const styles = useStyles()

  return (
    <Stack sx={styles.wrapper}>
      <Stack direction="row">
        <FormHelperText>
          <Text variant="subtitle4">
            <FormattedMessage
              id="buyer.verify.didntRecive"
              defaultMessage="Didn’t receive the code?"
            />
          </Text>
        </FormHelperText>
        <InlineTextButton
          disabled={isDisabled}
          sx={styles.button}
          color="primary"
          onClick={handleClick}
        >
          <Text variant="subtitle4">
            <FormattedMessage id="buyer.verify.resend" defaultMessage="Resend" />
          </Text>
        </InlineTextButton>
      </Stack>
      <ResendLimitMessage show={isDisabled} />
    </Stack>
  )
}
