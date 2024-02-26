import { Stack } from '@mui/material'
import Image from 'next/image'
import { FormattedMessage, useIntl } from 'react-intl'

import { CURRENCY_FORMAT_OPTIONS } from '~/features/currency'

import StarIcon from '~/shared/assets/icons/star.svg'
import { Button } from '~/shared/components/base/Button'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'
import { CardImageContainer } from '~/shared/components/common/CardImageContainer'

import { OrderItemModel } from '../../../model/order'

interface Props {
  orderItem: OrderItemModel
  isAllowLeaveReview?: boolean
}

export const OrderItemMobile = ({ orderItem, isAllowLeaveReview }: Props) => {
  const intl = useIntl()
  const { imageUrl, title, vendorName, quantity, totalPrice } = orderItem

  const formattedPrice = intl.formatNumber(totalPrice, { ...CURRENCY_FORMAT_OPTIONS })

  return (
    <Stack gap={1.5} direction="row">
      <CardImageContainer height={68} width={68} minWidth={68}>
        <Image
          src={imageUrl ?? ''}
          alt={title}
          style={{
            objectFit: 'cover',
          }}
          fill
        />
      </CardImageContainer>

      <Stack gap={2} width="100%">
        <Stack gap={0.5}>
          <Text variant="subtitle3" color="grey.900" lineClamp={2} sx={{ wordBreak: 'break-word' }}>
            {quantity} x {title}
          </Text>

          <Text variant="body6" color="grey.600">
            <FormattedMessage
              defaultMessage="Vendor: {vendorName}"
              id="ordersPage.orderCard.OrderItem.vendorName"
              values={{ vendorName }}
            />
          </Text>
        </Stack>

        <Text variant="subtitle2" color="grey.900">
          {formattedPrice}
        </Text>

        {!isAllowLeaveReview ? (
          <Button
            size="medium"
            startIcon={<SvgIcon size={24} icon={StarIcon} />}
            sx={{ minWidth: 184 }}
          >
            <FormattedMessage
              defaultMessage="Leave Review"
              id="ordersPage.orderCard.OrderItem.leaveReview"
            />
          </Button>
        ) : null}
      </Stack>
    </Stack>
  )
}
