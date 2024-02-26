import { Stack } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import dynamic from 'next/dynamic'
import { useIntl } from 'react-intl'

import { Button } from '~/shared/components/base/Button'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'
import { IconShape } from '~/shared/components/common/IconShape'

import { useSignInHeaderModalContext } from '../../lib/context/SignInHeaderModalContext'

import { useStyles } from './SignInHeaderModal.styles'

const RoleIcon = dynamic(() => import('~/shared/assets/icons/role.svg').then((mod) => mod.default))
const BuyerIcon = dynamic(() =>
  import('~/shared/assets/icons/buyer-icon.svg').then((mod) => mod.default),
)
const VendorIcon = dynamic(() =>
  import('~/shared/assets/icons/vendor-icon.svg').then((mod) => mod.default),
)

export const SignInHeaderModal = () => {
  const { isOpen, onClose } = useSignInHeaderModalContext()
  const intl = useIntl()
  const styles = useStyles()

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        PaperProps={{ sx: styles.paper }}
      >
        <IconShape>
          <SvgIcon size={32} icon={RoleIcon} stroke="primary.dark" />
        </IconShape>
        <Text variant="h6" sx={styles.text}>
          {intl.formatMessage({ id: 'roleModal.title', defaultMessage: 'Choose Your Role' })}
        </Text>
        <Stack direction="row" sx={styles.buttons}>
          <Button
            startIcon={<SvgIcon icon={BuyerIcon} />}
            fullWidth
            color="primary"
            onClick={onClose}
            href="/sign-in"
          >
            {intl.formatMessage({ id: 'roleModal.buyer.btn', defaultMessage: 'I Want to Buy' })}
          </Button>
          <Button
            startIcon={<SvgIcon icon={VendorIcon} />}
            href="/vendor/sign-in"
            fullWidth
            onClick={onClose}
          >
            {intl.formatMessage({ id: 'roleModal.vendor.btn', defaultMessage: 'I Want to Sell' })}
          </Button>
        </Stack>
      </Dialog>
    </>
  )
}
