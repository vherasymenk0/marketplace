import { Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import FailedIcon from '~/shared/assets/icons/failed.svg'
import { Button } from '~/shared/components/base/Button'
import { InlineTextButton } from '~/shared/components/base/InlineTextButton'
import { Paper } from '~/shared/components/base/Paper'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'
import { IconShape } from '~/shared/components/common/IconShape'

import { useStyles } from './ErrorPageView.styles'

export const ErrorPageView = ({ onResetError }: { onResetError: (href?: string) => void }) => {
  const styles = useStyles()

  return (
    <Stack sx={styles.wrapper}>
      <Paper>
        <IconShape>
          <SvgIcon icon={FailedIcon} size={32} stroke="primary.dark" />
        </IconShape>
        <Text variant="h4" sx={styles.title}>
          <FormattedMessage id="errorPage.title" defaultMessage="Something Went Wrong" />
        </Text>
        <Text variant="body3" sx={styles.subtitle}>
          <FormattedMessage
            id="errorPage.description"
            defaultMessage="We're unable to process your request at this moment. Please try again later, or {link} if the issue persists. We apologize for the inconvenience and appreciate your patience."
            values={{
              link: (
                <InlineTextButton
                  sx={styles.supportBtn}
                  onClick={() => onResetError('/contact')}
                  color="primary"
                >
                  <FormattedMessage id="errorPage.link" defaultMessage="contact support" />
                </InlineTextButton>
              ),
            }}
          />
        </Text>
        <Button sx={styles.button} onClick={() => onResetError()}>
          <FormattedMessage id="buyer.signup.success.btn" defaultMessage="Go Home" />
        </Button>
      </Paper>
    </Stack>
  )
}
