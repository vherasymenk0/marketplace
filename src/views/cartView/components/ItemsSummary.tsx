import { Box, Divider, Stack } from '@mui/material'
import { useQueryClient } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { FormattedMessage, FormattedNumber, useIntl } from 'react-intl'

import { SignInModal } from '~/widgets/SignInModal'

import { ApproximateValue, CURRENCY_FORMAT_OPTIONS } from '~/features/currency'

import { SHOPPING_CART_QUERY_KEY, ShoppingCartModel } from '~/entities/cart'
import { createOrders } from '~/entities/orders'

import { Button } from '~/shared/components/base/Button'
import { InformationTip } from '~/shared/components/base/InformationTip'
import { Text } from '~/shared/components/base/Text'
import { BasicCard } from '~/shared/components/cards/BasicCard'
import { useBoolean } from '~/shared/hooks/useBoolean'
import { useRouter } from '~/shared/hooks/useRouter'
import { showErrorToast } from '~/shared/services/toastr'

type Props = Pick<ShoppingCartModel['shoppingCart'], 'itemsCount' | 'total' | 'totalPrice'> & {
  isDisabled?: boolean
}

export const ItemsSummary = ({ itemsCount, total, totalPrice, isDisabled }: Props) => {
  const [isOpenModal, { off: handleCloseModal, on: handleOpenModal }] = useBoolean(false)
  const intl = useIntl()
  const router = useRouter()
  const session = useSession()
  const queryClient = useQueryClient()

  const handleSubmit = async () => {
    try {
      if (session.status === 'authenticated') {
        await createOrders({ authorizeToken: session.data?.apiToken })
        router.refresh()
        router.push('/checkout')
      } else {
        handleOpenModal()
      }
    } catch (err) {
      showErrorToast(String(err))
      void queryClient.invalidateQueries(SHOPPING_CART_QUERY_KEY)
    }
  }

  return (
    <Stack gap={2} sx={{ mt: { xs: 4, md: 0 } }}>
      <BasicCard>
        <Stack>
          <Box>
            <Text variant="h6" color="primary.main">
              <FormattedMessage
                defaultMessage="Items Summary ({itemsCount})"
                id="cart.summary.title"
                values={{ itemsCount }}
              />
            </Text>

            <Divider sx={{ my: 3 }} />

            <Stack gap={1}>
              <Stack direction="row" justifyContent="space-between">
                <Text variant="subtitle2" color="grey.900">
                  <FormattedMessage defaultMessage="Total" id="cart.summary.total" />
                </Text>

                <Text variant="subtitle2" color="grey.900">
                  <FormattedNumber value={totalPrice} {...CURRENCY_FORMAT_OPTIONS} />
                </Text>
              </Stack>

              <Stack direction="row" justifyContent="space-between">
                <Text variant="body4" color="grey.600" />

                <ApproximateValue price={total} />
              </Stack>
            </Stack>

            <Button fullWidth sx={{ mt: 4 }} disabled={isDisabled} onClick={handleSubmit}>
              <FormattedMessage defaultMessage="Go to Checkout" id="cart.summary.action" />
            </Button>
          </Box>
        </Stack>
      </BasicCard>

      <InformationTip
        text={intl.formatMessage({
          defaultMessage: 'Shipping costs and taxes will be calculated at checkout',
          id: 'cart.summary.tip',
        })}
      />
      <SignInModal isOpen={isOpenModal} onClose={handleCloseModal} />
    </Stack>
  )
}
