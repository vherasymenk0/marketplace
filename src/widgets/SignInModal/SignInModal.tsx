import { Stack } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import { FormattedMessage, useIntl } from 'react-intl'

import { SignInBuyerForm } from '~/features/auth/signInBuyer'

import CloseIcon from '~/shared/assets/icons/close.svg'
import { ActionIcon } from '~/shared/components/base/ActionIcon'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'

import { useStyles } from './SignInModal.styles'

interface Props {
  onClose: () => void
  isOpen: boolean
}

export const SignInModal = ({ onClose, isOpen }: Props) => {
  const styles = useStyles()
  const intl = useIntl()

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      PaperProps={{ sx: styles.paper }}
    >
      <ActionIcon onClick={onClose} sx={styles.closeIcon}>
        <SvgIcon size={32} icon={CloseIcon} />
      </ActionIcon>
      <Text variant="h4" sx={styles.title}>
        <FormattedMessage id="common.buyerSignup.modal.title" defaultMessage="Sign in" />
      </Text>
      <Text variant="body3" sx={styles.text}>
        <FormattedMessage
          id="common.buyerSignup.modal.text"
          defaultMessage="To proceed to checkout, please log in or create an account."
        />
      </Text>
      <Stack sx={styles.formWrapper}>
        <SignInBuyerForm
          signUpLinkText={intl.formatMessage({
            defaultMessage: 'Sign up',
            id: 'common.buyerSignup.modal.linkText',
          })}
          redirectPath="/checkout"
        />
      </Stack>
    </Dialog>
  )
}
