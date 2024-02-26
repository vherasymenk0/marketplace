import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'

import { getVisitorToken } from '~/shared/services/visitorToken'

import {
  getShoppingCart,
  getShoppingCountCart,
  getVisitorShoppingCart,
  getVisitorShoppingCountCart,
} from './api'

export const SHOPPING_CART_QUERY_KEY = ['shopping-cart']
export const SHOPPING_CART_COUNT_QUERY_KEY = ['shopping-cart/count']

const INITIAL_DATA = {
  shoppingCart: {
    cartItems: [],
    totalPrice: 0,
    totalShippingCost: 0,
    total: {
      USD: 0,
      AED: 0,
      BHD: 0,
      SAR: 0,
      OMR: 0,
      KWD: 0,
      QAR: 0,
    },
    productsCount: 0,
    itemsCount: 0,
  },
}

export const useShoppingCartQuery = () => {
  const session = useSession()

  const {
    data: { shoppingCart },
    isFetched,
    isFetching,
  } = useQuery(
    SHOPPING_CART_QUERY_KEY,
    () => {
      if (session.status === 'authenticated')
        return getShoppingCart({ authorizeToken: session.data.apiToken })

      const visitorToken = getVisitorToken()
      return getVisitorShoppingCart({ visitorToken })
    },
    {
      initialData: INITIAL_DATA,
    },
  )

  return {
    shoppingCart,
    isInitialLoading: !isFetched,
    isFetching,
  }
}

export const useShoppingCartCountQuery = () => {
  const session = useSession()

  const {
    data: { products_count },
  } = useQuery(
    SHOPPING_CART_COUNT_QUERY_KEY,
    () => {
      if (session.status === 'authenticated')
        return getShoppingCountCart({ authorizeToken: session.data.apiToken })

      const visitorToken = getVisitorToken()
      return getVisitorShoppingCountCart({ visitorToken })
    },
    {
      initialData: { products_count: 0 },
    },
  )

  return {
    productsCount: products_count,
  }
}
