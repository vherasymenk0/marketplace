import { Stack } from '@mui/material'
import Image from 'next/image'
import { FormattedMessage } from 'react-intl'

import { ShoppingCartItem } from '~/entities/cart'

import CloseIcon from '~/shared/assets/icons/close.svg'
import { ActionIcon } from '~/shared/components/base/ActionIcon'
import { NextLink } from '~/shared/components/base/NextLink'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'
import { BasicCard } from '~/shared/components/cards/BasicCard'
import { CardImageContainer } from '~/shared/components/common/CardImageContainer'
import { CounterInput } from '~/shared/components/inputs/CounterInput'

import { DeactivatedItemMessage } from '../DeactivatedItemMessage'

interface Props {
  image: string
  title: ShoppingCartItem['title']
  brand: ShoppingCartItem['brand']
  vendorName: ShoppingCartItem['vendor']['companyName']
  quantity: number
  price: string
  slug: ShoppingCartItem['slug']
  isDeactivated: boolean
  onQuantityChange: (value: number | null) => void
  onRemove: () => void
}

export const ItemCardMobile = ({
  brand,
  image,
  price,
  quantity,
  title,
  vendorName,
  slug,
  isDeactivated,
  onQuantityChange,
  onRemove,
}: Props) => {
  return (
    <BasicCard sx={{ position: 'relative', pt: 5 }}>
      <Stack direction="row" justifyContent="space-between" gap={2}>
        <CardImageContainer height={110} width={104} minWidth={104}>
          <Image
            src={image}
            alt={title}
            style={{
              objectFit: 'cover',
            }}
            fill
          />
        </CardImageContainer>

        <Stack direction="column" width="100%" gap={2}>
          <Stack gap={0.5} width="100%">
            <NextLink href={`/listing/${slug}`}>
              <Text variant="subtitle2" color="grey.900" lineClamp={2}>
                {title}
              </Text>
            </NextLink>

            <Text variant="body6" color="grey.600">
              <FormattedMessage
                defaultMessage="Brand: {brand}"
                values={{ brand }}
                id="cart.item.brand"
              />
            </Text>

            <Text variant="body6" color="grey.600">
              <FormattedMessage
                defaultMessage="Vendor: {vendorName}"
                values={{ vendorName }}
                id="cart.item.vendorName"
              />
            </Text>
          </Stack>

          <Text variant="subtitle2" color="grey.900">
            {price}
          </Text>

          <CounterInput
            value={quantity}
            sx={{ width: 97 }}
            onChange={onQuantityChange}
            min={1}
            max={999}
          />
        </Stack>

        <ActionIcon onClick={onRemove} sx={{ position: 'absolute', top: 12, right: 12 }}>
          <SvgIcon size={32} icon={CloseIcon} />
        </ActionIcon>
      </Stack>
      {isDeactivated ? <DeactivatedItemMessage /> : null}
    </BasicCard>
  )
}
