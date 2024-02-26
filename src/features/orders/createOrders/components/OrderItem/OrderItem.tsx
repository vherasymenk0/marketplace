import { Divider, Stack } from '@mui/material'
import Image from 'next/image'
import { FormattedMessage, FormattedNumber, useIntl } from 'react-intl'

import { CURRENCY_FORMAT_OPTIONS } from '~/features/currency'

import { CheckoutOrderItemModel } from '~/entities/orders'

import { CSSHide } from '~/shared/components/base/CSSHide'
import { NextLink } from '~/shared/components/base/NextLink'
import { Text } from '~/shared/components/base/Text'
import { CardImageContainer } from '~/shared/components/common/CardImageContainer'

import { useStyles } from './OrderItem.styles'

export const OrderItem = ({
  vendorName,
  quantity,
  title,
  totalPrice,
  slug,
  imageUrl,
}: CheckoutOrderItemModel) => {
  const styles = useStyles()
  const intl = useIntl()

  return (
    <>
      <Divider sx={styles.divider} />
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack sx={styles.wrapper}>
          <CardImageContainer width={{ xs: 80, lg: 76 }} height={{ xs: 80, lg: 76 }}>
            <Image
              src={imageUrl ?? ''}
              alt={intl.formatMessage(
                { id: 'orderItem.img.description', defaultMessage: 'Image of the {title}' },
                { title },
              )}
              style={{ objectFit: 'cover' }}
              fill
            />
          </CardImageContainer>

          <Stack sx={styles.leftContent}>
            <NextLink href={`/listing/${slug}`} sx={styles.desktopLink}>
              <Text variant="subtitle2" color="grey.900" lineClamp={2}>
                {title}
              </Text>
            </NextLink>

            <NextLink href={`/listing/${slug}`} sx={styles.mobileLink}>
              <Text variant="subtitle2" color="grey.900" lineClamp={2}>
                {quantity} x {title}
              </Text>
            </NextLink>

            <Text variant="body4" color="grey.600" lineClamp={2}>
              <FormattedMessage
                defaultMessage="Vendor: {vendorName}"
                values={{ vendorName }}
                id="orderItem.vendorName"
              />
            </Text>

            <CSSHide screen="desktop">
              <Text variant="subtitle2" color="grey.900" mt={2}>
                <FormattedNumber value={totalPrice} {...CURRENCY_FORMAT_OPTIONS} />
              </Text>
            </CSSHide>
          </Stack>
        </Stack>

        <Stack sx={styles.rightContent} ml={2}>
          <Text variant="subtitle3" color="grey.900">
            x{quantity}
          </Text>

          <Text variant="subtitle2" color="grey.900" ml={8.125}>
            <FormattedNumber value={totalPrice} {...CURRENCY_FORMAT_OPTIONS} />
          </Text>
        </Stack>
      </Stack>
    </>
  )
}
