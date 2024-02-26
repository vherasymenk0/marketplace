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

export const ItemCardDesktop = ({
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
    <BasicCard>
      <Stack direction="row" justifyContent="space-between">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          maxWidth={687}
        >
          <Stack direction="row" gap={2}>
            <CardImageContainer height={116} width={104} minWidth={104}>
              <Image
                src={image}
                alt={title}
                style={{
                  objectFit: 'cover',
                }}
                fill
              />
            </CardImageContainer>

            <Stack gap={0.5} width="100%" maxWidth={288}>
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
          </Stack>

          <Stack
            direction="row"
            width="100%"
            maxWidth={223}
            justifyContent="space-between"
            alignItems="center"
            ml={2}
          >
            <CounterInput
              value={quantity}
              sx={{ width: 97 }}
              onChange={onQuantityChange}
              min={1}
              max={999}
              disabled={isDeactivated}
            />

            <Text variant="subtitle2" color="grey.900" sx={{ ml: 2 }}>
              {price}
            </Text>
          </Stack>
        </Stack>

        <ActionIcon onClick={onRemove} sx={{ ml: 1 }}>
          <SvgIcon size={32} icon={CloseIcon} />
        </ActionIcon>
      </Stack>
      {isDeactivated ? <DeactivatedItemMessage /> : null}
    </BasicCard>
  )
}
