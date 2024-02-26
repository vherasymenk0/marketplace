import { MenuItem } from '@mui/material'
import dynamic from 'next/dynamic'
import { FormattedMessage, useIntl } from 'react-intl'

import { NextLink } from '~/shared/components/base/NextLink'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'

import { useSignInHeaderModalContext } from '../../lib/context/SignInHeaderModalContext'
import { CartMenuItem } from '../CartMenuItem'
import { SidebarItem } from '../SidebarItem'

import { useStyles } from './UnloginMobileMenu.styles'

const AccountIcon = dynamic(() =>
  import('~/shared/assets/icons/user.svg').then((mod) => mod.default),
)
const ArrowIcon = dynamic(() =>
  import('~/shared/assets/icons/arrow-right.svg').then((mod) => mod.default),
)

export const UnloginMobileMenu = () => {
  const { onOpen } = useSignInHeaderModalContext()

  const intl = useIntl()
  const styles = useStyles()

  return (
    <>
      <NextLink href="/vendor/sign-up" passHref noLinkStyle sx={styles.signup}>
        <MenuItem disableRipple sx={styles.root}>
          <Text variant="subtitle3">
            <FormattedMessage id="mobileMenu.forVendors.btn" defaultMessage="For Vendors" />
          </Text>
          <SvgIcon size={32} icon={ArrowIcon} />
        </MenuItem>
      </NextLink>
      <CartMenuItem sx={styles.cart} />
      <SidebarItem
        onClick={onOpen}
        icon={AccountIcon}
        title={intl.formatMessage({
          id: 'mobileMenu.signin.btn',
          defaultMessage: 'Sign in',
        })}
        sx={styles.signin}
        hideArrow
      />
    </>
  )
}
