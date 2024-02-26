'use client'

import { ReactNode } from 'react'
import { IntlProvider, ResolvedIntlConfig } from 'react-intl'

interface ServerIntlProviderProps {
  locale: ResolvedIntlConfig['locale']
  messages: ResolvedIntlConfig['messages']
  children: ReactNode
}

export const ServerIntlProvider = ({ messages, locale, children }: ServerIntlProviderProps) => {
  return (
    <IntlProvider messages={messages} locale={locale}>
      {children}
    </IntlProvider>
  )
}
