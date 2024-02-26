import { CircularProgress, Stack } from '@mui/material'
import { useRef, useState } from 'react'

import CheckIcon from '~/shared/assets/icons/check.svg'
import { useEffectOnUpdate } from '~/shared/hooks/useEffectOnUpdate'
import usePrevValue from '~/shared/hooks/usePrevValue'

interface LoadingStateProps {
  isLoading: boolean
  children: JSX.Element
}

export const LoadingState = ({ children, isLoading }: LoadingStateProps) => {
  const [state, setState] = useState<'success' | ''>('')
  const prevLoading = usePrevValue(isLoading)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const loadedState = prevLoading && !isLoading && !timerRef.current ? 'success' : state

  useEffectOnUpdate(() => {
    if (prevLoading && !isLoading && !timerRef.current) {
      setState('success')
      timerRef.current = setTimeout(() => setState(''), 1000)
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [isLoading])

  if (isLoading) {
    return <CircularProgress size={32} variant="indeterminate" thickness={4} />
  }

  if (loadedState === 'success') {
    return (
      <Stack>
        <CheckIcon />
      </Stack>
    )
  }

  return children
}
