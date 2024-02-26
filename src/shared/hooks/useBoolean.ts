'use client'

import { useMemo, useState } from 'react'

export type UseBooleanReturn = [
  boolean,
  {
    toggle: () => void
    on: () => void
    off: () => void
  },
]

export const useBoolean = (initialValue?: boolean): UseBooleanReturn => {
  const [isActiveState, setIsActiveState] = useState<boolean>(!!initialValue)

  const handlers = useMemo(
    () => ({
      toggle: () => setIsActiveState((oldValue) => !oldValue),
      on: () => setIsActiveState(true),
      off: () => setIsActiveState(false),
    }),
    [],
  )

  return [isActiveState, handlers]
}
