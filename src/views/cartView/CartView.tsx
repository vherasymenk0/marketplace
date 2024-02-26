'use client'

import { Container, Grid, Stack } from '@mui/material'
import { useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'

import { useShoppingCartQuery } from '~/entities/cart'

import CartIcon from '~/shared/assets/icons/cart.svg'
import { Breadcrumbs } from '~/shared/components/base/Breadcrumbs'
import { Text } from '~/shared/components/base/Text'
import { Center } from '~/shared/components/common/Center'
import { CenterLoader } from '~/shared/components/common/CenterLoader'
import { EmptyState } from '~/shared/components/common/EmptyState'

import { ItemsList } from './components/ItemsList'
import { ItemsSummary } from './components/ItemsSummary'

export const CartView = () => {
  const [isUpdating, setIsUpdating] = useState(false)

  const { shoppingCart, isInitialLoading, isFetching } = useShoppingCartQuery()
  const { cartItems, itemsCount, productsCount, totalPrice, total } = shoppingCart ?? {
    cartItems: [],
  }

  const intl = useIntl()
  const isEmpty = productsCount === 0

  const handleLoading = (isLoading: boolean) => {
    setIsUpdating(isLoading)
  }

  return (
    <Container sx={{ mt: { xs: 3, md: 4 }, mb: { xs: 12, md: 14 }, height: '100%' }}>
      <Breadcrumbs
        items={[
          { child: intl.formatMessage({ defaultMessage: 'Home', id: 'common.home' }), href: '/' },
          { child: intl.formatMessage({ defaultMessage: 'Cart', id: 'common.cart' }), href: '#' },
        ]}
      />

      {isInitialLoading ? (
        <CenterLoader />
      ) : (
        <>
          <Stack mt={3}>
            <Text variant="h6" color="grey.900">
              <FormattedMessage defaultMessage="Cart" id="cart.title" />
            </Text>

            <Text variant="body4" color="grey.600" mt={1}>
              <FormattedMessage
                defaultMessage="{count} products"
                id="cart.itemsCount"
                values={{ count: productsCount }}
              />
            </Text>
          </Stack>

          {isEmpty ? (
            <Center>
              <EmptyState
                title={intl.formatMessage({
                  defaultMessage: 'Shopping Cart is Empty',
                  id: 'cart.emptyState.title',
                })}
                description={intl.formatMessage({
                  defaultMessage:
                    'Looks like you have not added anything to your shopping cart yet. ',
                  id: 'cart.emptyState.description',
                })}
                icon={CartIcon}
                iconProps={{
                  size: 32,
                  color: 'primary.dark',
                }}
                titleProps={{ variant: 'h4' }}
              />
            </Center>
          ) : (
            <Grid container columnSpacing={3} mt={3}>
              <Grid item xs={12} md={8}>
                <ItemsList items={cartItems} onLoading={handleLoading} />
              </Grid>

              <Grid item xs={12} md={4}>
                <ItemsSummary
                  itemsCount={itemsCount}
                  total={total}
                  totalPrice={totalPrice}
                  isDisabled={isUpdating || isFetching}
                />
              </Grid>
            </Grid>
          )}
        </>
      )}
    </Container>
  )
}
