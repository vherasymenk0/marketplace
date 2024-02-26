'use client'

import { ReactNode, useMemo } from 'react'

import { contextFactory } from '~/shared/helpers/contextFactory'
import { useBoolean } from '~/shared/hooks/useBoolean'

interface ContextProps {
  isOpen: boolean
  onClose: () => void
  onOpen: () => void
}

const [useSignInHeaderModalContext, Context] = contextFactory<ContextProps>()

interface Props {
  children: ReactNode
}

const SignInHeaderModalContext = ({ children }: Props) => {
  const [isOpen, { off, on }] = useBoolean(false)

  const contextValue = useMemo(() => ({ isOpen, onClose: off, onOpen: on }), [isOpen, off, on])

  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

export { SignInHeaderModalContext, useSignInHeaderModalContext }
