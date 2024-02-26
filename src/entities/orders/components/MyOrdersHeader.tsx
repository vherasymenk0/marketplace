'use client'

import { Box, Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import { QueryListSorting } from '~/widgets/QueryListSorting'

import { InformationTip } from '~/shared/components/base/InformationTip'
import { NextLink } from '~/shared/components/base/NextLink'
import { Text } from '~/shared/components/base/Text'

import { ORDER_SORT_OPTIONS } from '../lib/data/order'

const informationTipText = (
  <FormattedMessage
    id="ordersPage.informationTip"
    defaultMessage="If you encounter any issues with your order, please {link}. We're here to help!"
    values={{
      link: (
        <NextLink href="/contact" color="primary.main">
          <FormattedMessage defaultMessage="Contact us" id="ordersPage.informationTip.contactUs" />
        </NextLink>
      ),
    }}
  />
)

interface Props {
  itemsCount: number
  isVendor?: boolean
}

export const MyOrdersHeader = ({ itemsCount, isVendor = false }: Props) => {
  const isEmpty = itemsCount === 0

  return (
    <Stack gap={3} mb={2}>
      <Stack direction="row" justifyContent="space-between">
        <Box>
          <Text variant="h6" color="grey.900">
            <FormattedMessage defaultMessage="My Orders" id="ordersPage.title" />
          </Text>

          <Text variant="body4" color={({ palette }) => palette.grey[600]} mt={1}>
            <FormattedMessage
              defaultMessage="{count} orders"
              id="ordersPage.count"
              values={{ count: itemsCount }}
            />
          </Text>
        </Box>

        {!isEmpty ? <QueryListSorting sortParams={ORDER_SORT_OPTIONS} /> : null}
      </Stack>

      {!isEmpty && !isVendor ? <InformationTip text={informationTipText} /> : null}
    </Stack>
  )
}
