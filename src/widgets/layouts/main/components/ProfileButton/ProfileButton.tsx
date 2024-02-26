'use client'

import { Avatar, Box, useMediaQuery } from '@mui/material'
import { Theme } from '@mui/material/styles'
import dynamic from 'next/dynamic'
import { useSession } from 'next-auth/react'

import { InlineTextButton } from '~/shared/components/base/InlineTextButton'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'

import { useStyles } from './ProfileButton.styles'

const ArrowIcon = dynamic(() =>
  import('~/shared/assets/icons/arrow-right.svg').then((mod) => mod.default),
)

const VendorHomeIcon = dynamic(() =>
  import('~/shared/assets/icons/vendor_home.svg').then((mod) => mod.default),
)

const getInitialsFromName = (name: string) => {
  const firsLetter = name.split(' ')[0]?.[0]
  const secondLetter = name.split(' ')[1]?.[0] ?? ''
  return `${firsLetter}${secondLetter}`
}

export const ProfileButton = () => {
  const session = useSession()
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const styles = useStyles()
  const user = session.data?.user

  if (!user) return null

  // TODO: need to get img path from user after adding avatar feature
  const avatar = null
  const nameInitials = getInitialsFromName(user.fullName)
  const href = user.type === 'vendor' ? '/vendor/profile' : '/profile'
  const children =
    user.type === 'vendor' ? (
      <SvgIcon icon={VendorHomeIcon} size={isMobile ? 42 : 24} />
    ) : (
      nameInitials
    )
  const AvatarComponent = (
    <Avatar alt={user.fullName} {...(avatar ? { src: avatar } : { children })} />
  )

  if (isMobile)
    return (
      <InlineTextButton
        startIcon={AvatarComponent}
        endIcon={<SvgIcon size={32} icon={ArrowIcon} />}
        sx={styles.mobileRoot}
        href={href}
      >
        <Box>
          <Text variant="subtitle4">{user.fullName}</Text>
          <Text variant="body5">{user.email}</Text>
        </Box>
      </InlineTextButton>
    )

  return (
    <InlineTextButton startIcon={AvatarComponent} href={href} sx={styles.desktopRoot}>
      {user.fullName}
    </InlineTextButton>
  )
}
