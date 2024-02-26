/* eslint-disable import/no-extraneous-dependencies */
import { Theme, ThemeProvider } from '@mui/material/styles'
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
import { RenderOptions, render } from '@testing-library/react'
import { ReactElement } from 'react'
import { Toaster } from 'react-hot-toast'
import { IntlProvider } from 'react-intl'

import { theme } from '~/shared/theme'

interface AllTheProvidersProps {
  children: React.ReactElement
}

const queryClient = new QueryClient()

const AllTheProviders = ({ children }: AllTheProvidersProps) => {
  return (
    <IntlProvider locale="en">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider<Theme> theme={theme}>{children}</ThemeProvider>
        <Toaster />
      </QueryClientProvider>
    </IntlProvider>
  )
}

export const renderTestComponent = (ui: ReactElement, options?: RenderOptions) => {
  return render(<AllTheProviders>{ui}</AllTheProviders>, options)
}
