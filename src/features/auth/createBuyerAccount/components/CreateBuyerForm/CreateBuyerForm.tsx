import { Box } from '@mui/material'
import { FormProvider } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { Button } from '~/shared/components/base/Button'
import { NextLink } from '~/shared/components/base/NextLink'
import { Text } from '~/shared/components/base/Text'

import { useCreateBuyerForm } from '../../hooks/useCreateBuyerForm'
import { CreateBuyerFormTemplate } from '../CreateBuyerFormTemplate'

import { useStyles } from './CreateBuyerForm.styles'

export const CreateBuyerForm = () => {
  const { methods, isPending, handleSubmit, isError } = useCreateBuyerForm()
  const styles = useStyles()

  return (
    <FormProvider {...methods}>
      <Box component="form" noValidate onSubmit={handleSubmit}>
        <CreateBuyerFormTemplate />
        <Button
          type="submit"
          loading={isPending}
          disabled={isError}
          fullWidth
          sx={styles.submitButton}
        >
          <FormattedMessage id="buyer.signup.submit" defaultMessage="Create Account" />
        </Button>
        <Text variant="subtitle4" sx={styles.text}>
          <FormattedMessage
            id="buyer.signup.alreadyHave"
            defaultMessage="Already have an account? {link}"
            values={{
              link: (
                <NextLink href="/sign-in">
                  <FormattedMessage defaultMessage="Buyer Sign in" id="common.buyerSignin" />
                </NextLink>
              ),
            }}
          />
        </Text>
      </Box>
    </FormProvider>
  )
}
