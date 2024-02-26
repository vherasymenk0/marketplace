'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'
import { useState } from 'react'

interface ReactQueryProviderProps {
  children?: React.ReactNode
}

export const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
  // eslint-disable-next-line react/hook-use-state
  const [queryClient] = useState(() => {
    const queryClientInitial = new QueryClient({
      defaultOptions: {
        queries: {
          retry: 0,
          refetchInterval: false,
          refetchOnWindowFocus: false,
        },
      },
    })

    return queryClientInitial
  })

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
