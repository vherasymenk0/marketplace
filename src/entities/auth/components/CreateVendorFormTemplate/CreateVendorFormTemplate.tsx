'use client'

import { Stack } from '@mui/material'
import { FormattedMessage, useIntl } from 'react-intl'

import { NextLink } from '~/shared/components/base/NextLink'
import { Text } from '~/shared/components/base/Text'
import { PhoneField } from '~/shared/components/fields/PhoneField'
import { SelectField } from '~/shared/components/fields/SelectField'
import { TextField } from '~/shared/components/fields/TextField'
import { MUTABLE_COUNTRY_OPTIONS } from '~/shared/constants/options'

import { useStyles } from './CreateVendorFormTemplate.styles'

interface Props {
  phoneNumberMask: string
  countryCode: string
  phoneFieldDisabled: boolean
}

export const CreateVendorFormTemplate = ({
  phoneNumberMask,
  countryCode,
  phoneFieldDisabled,
}: Props) => {
  const intl = useIntl()
  const styles = useStyles()

  return (
    <Stack rowGap={2}>
      <TextField
        name="fullName"
        label={intl.formatMessage({
          defaultMessage: 'Full Name',
          id: 'signup.vendor.fields.fullName',
        })}
        required
      />

      <TextField
        name="companyName"
        label={intl.formatMessage({
          defaultMessage: 'Company Name',
          id: 'signup.vendor.fields.companyName',
        })}
        required
      />

      <SelectField
        name="country"
        label={intl.formatMessage({
          defaultMessage: 'Country',
          id: 'signup.vendor.fields.country',
        })}
        required
        options={MUTABLE_COUNTRY_OPTIONS}
      />

      <PhoneField
        type="tel"
        name="phone"
        label={intl.formatMessage({
          defaultMessage: 'Phone Number',
          id: 'signup.vendor.fields.phoneNumber',
        })}
        required
        mask={phoneNumberMask}
        countryCode={countryCode}
        disabled={phoneFieldDisabled}
      />

      <TextField
        type="email"
        name="email"
        label={intl.formatMessage({
          defaultMessage: 'Email',
          id: 'signup.vendor.fields.email',
        })}
        placeholder="email@example.com"
        required
      />

      <Text variant="body4" color={({ palette }) => palette.grey[600]}>
        <FormattedMessage
          defaultMessage="Complete your registration to receive a confirmation email, enabling you to start your account setup."
          id="signup.vendor.infoNote"
        />
      </Text>

      <Text variant="subtitle4" color={({ palette }) => palette.grey[900]}>
        <FormattedMessage
          defaultMessage="By continuing you agree to our {termsLink} and {policyLink}"
          id="signup.vendor.TermsPolicyLinks"
          values={{
            policyLink: (
              <NextLink href="/privacy-policy" sx={styles.link}>
                <FormattedMessage
                  defaultMessage="Privacy Policy"
                  id="signup.vendor.privacyPolicy"
                />
              </NextLink>
            ),
            termsLink: (
              <NextLink href="/terms" sx={styles.link}>
                <FormattedMessage
                  defaultMessage="Terms and Conditions"
                  id="signup.vendor.termsConditions"
                />
              </NextLink>
            ),
          }}
        />
      </Text>
    </Stack>
  )
}
