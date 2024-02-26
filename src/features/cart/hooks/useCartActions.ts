import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { useIntl } from 'react-intl'

import {
  AddShoppingCartItemSchemaRequest,
  SHOPPING_CART_COUNT_QUERY_KEY,
  SHOPPING_CART_QUERY_KEY,
  addShoppingCartItem,
  addVisitorShoppingCartItem,
  removeShoppingCartItem,
  removeVisitorShoppingCartItem,
  updateShoppingCartItem,
  updateVisitorShoppingCartItem,
} from '~/entities/cart'

import { mapCamelToSnakeCase } from '~/shared/helpers/cases'
import { showErrorToast } from '~/shared/services/toastr'
import { getVisitorToken } from '~/shared/services/visitorToken'

export const useCartActions = () => {
  const intl = useIntl()
  const session = useSession()
  const queryClient = useQueryClient()

  const onError = () => {
    showErrorToast(
      intl.formatMessage({
        defaultMessage: 'Something went wrong',
        id: 'common.errors.defaultError',
      }),
    )
  }
  const onSuccess = () => {
    void queryClient.invalidateQueries(SHOPPING_CART_QUERY_KEY)
    void queryClient.invalidateQueries({ queryKey: SHOPPING_CART_COUNT_QUERY_KEY })
  }

  const addToCart = useMutation(
    (newItem: { listingId: string; quantity: number }) => {
      const dto = AddShoppingCartItemSchemaRequest.parse({
        cart_item: mapCamelToSnakeCase(newItem),
      })

      if (session.status === 'authenticated')
        return addShoppingCartItem(dto, { authorizeToken: session.data.apiToken })

      const visitorToken = getVisitorToken()
      return addVisitorShoppingCartItem(dto, { visitorToken })
    },
    {
      onSuccess,
      onError,
    },
  )

  const updateCartItemQuantity = useMutation(
    ({ cartItemId, quantity }: { cartItemId: string; quantity: number }) => {
      if (session.status === 'authenticated')
        return updateShoppingCartItem(
          cartItemId,
          { cart_item: { quantity } },
          { authorizeToken: session.data?.apiToken },
        )

      const visitorToken = getVisitorToken()
      return updateVisitorShoppingCartItem(
        cartItemId,
        { cart_item: { quantity } },
        { visitorToken },
      )
    },
    {
      onSuccess,
      onError,
    },
  )

  const removeCartItem = useMutation(
    (cartItemId: string) => {
      if (session.status === 'authenticated')
        return removeShoppingCartItem(cartItemId, {
          authorizeToken: session.data.apiToken,
        })

      const visitorToken = getVisitorToken()
      return removeVisitorShoppingCartItem(cartItemId, {
        visitorToken,
      })
    },
    {
      onSuccess,
      onError,
    },
  )

  return { addToCart, updateCartItemQuantity, removeCartItem }
}
