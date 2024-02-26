'use client'

import { ReactNode, useMemo } from 'react'

import { CurrenciesModel } from '~/entities/currency'

import { contextFactory } from '~/shared/helpers/contextFactory'

interface ContextProps {
  currencies: CurrenciesModel[]
}

const [useCurrenciesContext, Context] = contextFactory<ContextProps>()

interface Props {
  currencies: CurrenciesModel[]
  children: ReactNode
}

const CurrenciesContext = ({ currencies, children }: Props) => {
  const context = useMemo(
    () => ({
      currencies,
    }),
    [currencies],
  )

  return <Context.Provider value={context}>{children}</Context.Provider>
}

export { CurrenciesContext, useCurrenciesContext }
