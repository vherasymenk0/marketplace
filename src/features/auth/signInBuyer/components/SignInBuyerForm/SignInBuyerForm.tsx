import { Stack } from '@mui/material'
import { FormProvider } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { SignInBuyerFormTemplate } from '~/entities/auth'

import { Button } from '~/shared/components/base/Button'
import { NextLink } from '~/shared/components/base/NextLink'
import { Text } from '~/shared/components/base/Text'

import { useSignInBuyerForm } from '../../hooks/useSignInBuyerForm'

import { useStyles } from './SignInBuyerForm.styles'

interface Props {
  redirectPath?: string
  signUpLinkText?: string
}

export const SignInBuyerForm = ({ signUpLinkText, redirectPath }: Props) => {
  const { methods, onSubmit, isSubmitting } = useSignInBuyerForm({ redirectPath })
  const styles = useStyles()

  return (
    <FormProvider {...methods}>
      <Stack component="form" sx={{ width: '100%' }} gap={4} noValidate onSubmit={onSubmit}>
        <SignInBuyerFormTemplate />

        <Stack>
          <Button type="submit" loading={isSubmitting} fullWidth>
            <FormattedMessage id="buyer.signin.btn" defaultMessage="Sign In" />
          </Button>

          <Text variant="subtitle4" sx={styles.text}>
            <FormattedMessage
              id="buyer.signin.dontHave"
              defaultMessage="Don’t have an account? {link}"
              values={{
                link: (
                  <NextLink href="/sign-up">
                    {signUpLinkText ?? (
                      <FormattedMessage defaultMessage="Buyer Sign up" id="common.buyerSignup" />
                    )}
                  </NextLink>
                ),
              }}
            />
          </Text>
        </Stack>
      </Stack>
    </FormProvider>
  )
}
