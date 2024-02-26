import { Box, Stack } from '@mui/material'
import dynamic from 'next/dynamic'
import { signOut, useSession } from 'next-auth/react'
import { FormattedMessage, useIntl } from 'react-intl'

import { CurrencySelect } from '~/features/currency'

import { InlineTextButton } from '~/shared/components/base/InlineTextButton'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'

import { CatalogMenu } from '../CatalogMenu'
import { ProfileButton } from '../ProfileButton'

import { useStyles } from './MobileMenu.styles'

const MenuActions = dynamic(() => import('../MenuActions').then((mod) => mod.MenuActions))
const ExitIcon = dynamic(() => import('~/shared/assets/icons/exit.svg').then((mod) => mod.default))

export const MobileMenu = () => {
  const session = useSession()
  const intl = useIntl()
  const user = session.data?.user
  const styles = useStyles()

  return (
    <Stack justifyContent="space-between" height="100%">
      <Stack>
        <Stack mb={2}>
          <>
            <ProfileButton />
            <Text variant="subtitle2" p={2} color="grey.900">
              <FormattedMessage id="mobileMenu.title" defaultMessage="Menu" />
            </Text>
            <CatalogMenu isAuth={!!user} />
            <MenuActions user={user} />
          </>
        </Stack>
        <Box p={2}>
          <Text variant="subtitle2">
            {intl.formatMessage({
              id: 'mobileMenu.currency.title',
              defaultMessage: 'Currency Selection',
            })}
          </Text>
          <CurrencySelect sx={styles.currency} />
        </Box>
      </Stack>
      {user ? (
        <InlineTextButton
          startIcon={<SvgIcon icon={ExitIcon} />}
          sx={styles.logout}
          onClick={() => signOut({ callbackUrl: '/' })}
        >
          {intl.formatMessage({
            id: 'mobileMenu.logout.btn',
            defaultMessage: 'Log Out',
          })}
        </InlineTextButton>
      ) : null}
    </Stack>
  )
}
