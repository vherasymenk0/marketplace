import { Grid } from '@mui/material'
import { useIntl } from 'react-intl'

import LightningIcon from '~/shared/assets/icons/lightning-icon.svg'
import ShippingIcon from '~/shared/assets/icons/order.svg'
import PaymentIcon from '~/shared/assets/icons/payment-icon.svg'
import SupportIcon from '~/shared/assets/icons/support-icon.svg'

import { InfoItem } from '../InfoItem'

export const InfoSection = () => {
  const intl = useIntl()

  return (
    <Grid container spacing={3} mt={7}>
      <InfoItem
        icon={SupportIcon}
        title={intl.formatMessage({
          defaultMessage: 'Customer Support',
          id: 'homePage.infoSection.support.title',
        })}
        description={intl.formatMessage({
          defaultMessage: 'In safe hands',
          id: 'homePage.infoSection.support.description',
        })}
      />

      <InfoItem
        icon={PaymentIcon}
        title={intl.formatMessage({
          defaultMessage: 'Easy and Safe Payment',
          id: 'homePage.infoSection.payment.title',
        })}
        description={intl.formatMessage({
          defaultMessage: 'Shop with us',
          id: 'homePage.infoSection.payment.description',
        })}
      />

      <InfoItem
        icon={ShippingIcon}
        title={intl.formatMessage({
          defaultMessage: 'Shipping Protection',
          id: 'homePage.infoSection.shipping.title',
        })}
        description={intl.formatMessage({
          defaultMessage: 'Protect against damages and lost',
          id: 'homePage.infoSection.shipping.description',
        })}
      />

      <InfoItem
        icon={LightningIcon}
        title={intl.formatMessage({
          defaultMessage: 'Fast Delivery',
          id: 'homePage.infoSection.delivery.title',
        })}
        description={intl.formatMessage({
          defaultMessage: 'Efficient delivery solutions',
          id: 'homePage.infoSection.delivery.description',
        })}
      />
    </Grid>
  )
}
