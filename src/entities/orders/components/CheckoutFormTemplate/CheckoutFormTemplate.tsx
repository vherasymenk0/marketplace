'use client'

import { Divider, InputAdornment, Paper, Stack } from '@mui/material'
import { FormattedMessage, useIntl } from 'react-intl'

import { Text } from '~/shared/components/base/Text'
import { SelectField } from '~/shared/components/fields/SelectField'
import { TextField } from '~/shared/components/fields/TextField'
import { MUTABLE_COUNTRY_OPTIONS } from '~/shared/constants/options'

import { useStyles } from './CheckoutFormTemplate.styles'

export const CheckoutFormTemplate = () => {
  const styles = useStyles()
  const intl = useIntl()

  return (
    <>
      <Paper sx={styles.paper}>
        <Text variant="subtitle1" color="primary.main">
          <FormattedMessage id="checkout.contactInformation" defaultMessage="Contact Information" />
        </Text>
        <Divider sx={styles.divider} />
        <Stack sx={styles.fields}>
          <TextField
            name="contactInformation.fullName"
            label={intl.formatMessage({
              defaultMessage: 'Full Name',
              id: 'checkout.fields.fullName',
            })}
            required
            fullWidth
          />
          <Stack sx={styles.wrapper}>
            <TextField
              type="tel"
              name="contactInformation.phone"
              label={intl.formatMessage({
                defaultMessage: 'Phone',
                id: 'checkout.fields.phone',
              })}
              required
              fullWidth
              startAdornment={
                <InputAdornment position="start">
                  <Text>+</Text>
                </InputAdornment>
              }
            />
            <TextField
              type="email"
              name="contactInformation.email"
              label={intl.formatMessage({
                defaultMessage: 'Email',
                id: 'checkout.fields.email',
              })}
              required
              fullWidth
            />
          </Stack>
        </Stack>
      </Paper>

      <Paper sx={styles.paper}>
        <Text variant="subtitle1" color="primary.main">
          <FormattedMessage
            id="checkout.shippingInformation"
            defaultMessage="Shipping Information"
          />
        </Text>
        <Divider sx={styles.divider} />
        <Stack sx={styles.fields}>
          <Stack sx={styles.wrapper}>
            <SelectField
              name="shippingInformation.country"
              label={intl.formatMessage({
                defaultMessage: 'Country',
                id: 'checkout.fields.country',
              })}
              required
              options={MUTABLE_COUNTRY_OPTIONS}
              fullWidth
            />
            <TextField
              type="text"
              name="shippingInformation.city"
              label={intl.formatMessage({
                defaultMessage: 'City',
                id: 'checkout.fields.city',
              })}
              required
              fullWidth
            />
          </Stack>
          <TextField
            type="text"
            name="shippingInformation.address"
            label={intl.formatMessage({
              defaultMessage: 'Address',
              id: 'checkout.fields.address',
            })}
            required
            fullWidth
          />
        </Stack>
      </Paper>
    </>
  )
}
