import dynamic from 'next/dynamic'
import { FormattedMessage, useIntl } from 'react-intl'

import { Button } from '~/shared/components/base/Button'

import { useSignInHeaderModalContext } from '../../lib/context/SignInHeaderModalContext'
import { CartHeaderItem } from '../CartHeaderItem'
import { HeaderItem } from '../HeaderItem'

import { useStyles } from './UnloginHeaderActions.styles'

const UserIcon = dynamic(() => import('~/shared/assets/icons/user.svg').then((mod) => mod.default))

export const UnloginHeaderActions = () => {
  const styles = useStyles()
  const intl = useIntl()
  const { onOpen } = useSignInHeaderModalContext()

  return (
    <>
      <CartHeaderItem />
      <HeaderItem
        onClick={onOpen}
        icon={<UserIcon />}
        title={intl.formatMessage({ id: 'header.signin.btn', defaultMessage: 'Sign in' })}
      />
      <Button variant="outlined" href="/vendor/sign-up" sx={styles.btn}>
        <FormattedMessage id="header.btn" defaultMessage="For Vendors" />
      </Button>
    </>
  )
}
