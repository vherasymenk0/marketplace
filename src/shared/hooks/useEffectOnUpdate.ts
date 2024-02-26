import { useEffect, useRef } from 'react'

export const useEffectOnUpdate = <
  TEffect extends () => void | (() => void),
  TDeps extends unknown[] = [],
>(
  effect: TEffect,
  deps: TDeps,
) => {
  const isFirstRun = useRef(true)

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }

    // eslint-disable-next-line consistent-return
    if (effect) return effect()
  }, deps)
}
