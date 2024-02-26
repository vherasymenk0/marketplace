'use client'

import { Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import FailedIcon from '~/shared/assets/icons/failed.svg'
import { Button } from '~/shared/components/base/Button'
import { NextLink } from '~/shared/components/base/NextLink'
import { Paper } from '~/shared/components/base/Paper'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'
import { IconShape } from '~/shared/components/common/IconShape'

import { useStyles } from './NotFound.styles'

export const NotFound = () => {
  const styles = useStyles()

  return (
    <Stack sx={styles.wrapper}>
      <Paper>
        <IconShape>
          <SvgIcon icon={FailedIcon} size={32} stroke="primary.dark" />
        </IconShape>
        <Text variant="h4" sx={styles.title}>
          <FormattedMessage id="notFound.title" defaultMessage="Page Not Found" />
        </Text>
        <Text variant="body3" sx={styles.subtitle}>
          <FormattedMessage
            id="notFound.description.firstPart"
            defaultMessage="Looks like you've ventured into uncharted territory. The page you were looking for seems to have taken a detour."
          />
        </Text>
        <Text variant="body3" mt={2} sx={styles.subtitle}>
          <FormattedMessage
            id="notFound.description.secondPart"
            defaultMessage="Feel free to {link} for assistance. We apologize for any inconvenience!"
            values={{
              link: (
                <NextLink href="/contact" sx={styles.contactBtn}>
                  <FormattedMessage id="notFound.link" defaultMessage="contact us" />
                </NextLink>
              ),
            }}
          />
        </Text>
        <NextLink href="/" noLinkStyle sx={styles.goHomeBtn}>
          <Button>
            <FormattedMessage id="buyer.signup.success.btn" defaultMessage="Go Home" />
          </Button>
        </NextLink>
      </Paper>
    </Stack>
  )
}
