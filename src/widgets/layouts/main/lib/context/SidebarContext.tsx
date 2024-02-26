'use client'

import { ReactNode, useMemo, useState } from 'react'

import { contextFactory } from '~/shared/helpers/contextFactory'

interface ContextProps {
  isOpen: boolean
  onChangeOpen: (isOpen: boolean) => void
}

const [useSidebarContext, Context] = contextFactory<ContextProps>()

interface Props {
  children: ReactNode
}

const SidebarContext = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const contextValue = useMemo(() => ({ isOpen, onChangeOpen: setIsOpen }), [isOpen, setIsOpen])

  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

export { SidebarContext, useSidebarContext }
