import { Metadata } from 'next'
import { getServerSession } from 'next-auth/next'
import { Toaster } from 'react-hot-toast'

import { appConfig } from '@config/app'
import {
  NextAuthProvider,
  ReactQueryProvider,
  ServerIntlProvider,
  ThemeRegistry,
} from '~/app/providers'

import { CookieBanner } from '~/widgets/CookieBanner'

import { authConfig } from '~/entities/auth'

import { getIntl } from '~/shared/services/intl'
import '~/app/interceptors'

export const metadata: Metadata = {
  metadataBase: new URL(appConfig.appURL),
  title: {
    template: '%s | Marketplace',
    default: 'Nextor',
  },
  description: 'Marketplace',
  manifest: '/manifest.json',
  openGraph: {
    locale: 'en_US',
  },
  icons: {
    icon: '/images/icons/manifest-icon-192.png',
    shortcut: '/favicon.ico',
    apple: '/images/apple-touch-icons/apple-icon-180.png',
    other: [
      {
        rel: 'apple-touch-startup-image',
        url: '/images/splashscreens/apple-splash-1136-640.jpg',
        media:
          '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
      },
      {
        rel: 'apple-touch-startup-image',
        url: '/images/splashscreens/apple-splash-640-1136.jpg',
        media:
          '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      },
    ],
  },
}

const RootLayout = async ({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) => {
  const session = await getServerSession(authConfig)
  const intl = await getIntl(locale)

  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body>
        <NextAuthProvider session={session}>
          <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
            <ReactQueryProvider>
              <ThemeRegistry>
                {children}
                <CookieBanner />
                <Toaster />
              </ThemeRegistry>
            </ReactQueryProvider>
          </ServerIntlProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}

export default RootLayout
