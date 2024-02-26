import jwtDecode from 'jwt-decode'
import { NextResponse } from 'next/server'
import { JWT } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'
import { i18nRouter } from 'next-i18n-router'

import i18nConfig from 'i18nConfig'

const getLocalizedPaths = (paths: string[]) => {
  let localizedPaths = [...paths]

  paths.forEach((route) => {
    i18nConfig.locales.forEach((locale) => {
      localizedPaths = [...localizedPaths, `/${locale}${route}`]
    })
  })

  return localizedPaths
}

const getLocaleFromPath = (path: string): string => {
  const { locales } = i18nConfig
  const segments = path.split('/')

  if (segments.length > 1 && locales.includes(segments[1] ?? '')) {
    return segments[1] ?? ''
  }

  return ''
}

const CUSTOMER_PROTECTED_PAGES = getLocalizedPaths(['/profile', '/checkout', '/orders'])
const VENDOR_PROTECTED_PAGES = getLocalizedPaths([
  '/vendor/my-listings',
  '/vendor/my-imports',
  '/vendor/edit-listing',
  '/vendor/import-listing',
  '/vendor/orders',
])
const PROTECTED_PAGES = [...CUSTOMER_PROTECTED_PAGES, ...VENDOR_PROTECTED_PAGES]

const AUTHENTICATION_PAGES = getLocalizedPaths([
  '/sign-in',
  '/sign-up',
  '/forgot-password',
  '/reset-password',
  '/authorize',
  '/vendor/sign-in',
  '/vendor/sign-up',
  '/vendor/forgot-password',
  '/vendor/reset-password',
  '/vendor/create-password',
  '/vendor/authorize',
])

const isProtectedPage = (pathname: string) =>
  PROTECTED_PAGES.some((path) => pathname.startsWith(path))
const isVendorPage = (pathname: string) =>
  getLocalizedPaths(['/vendor']).some((path) => pathname.startsWith(path))
const isCustomerPage = (pathname: string) =>
  CUSTOMER_PROTECTED_PAGES.some((path) => pathname.startsWith(path))
const isAuthenticationPage = (pathname: string) =>
  AUTHENTICATION_PAGES.some((path) => pathname.startsWith(path))

export default withAuth(
  (req) => {
    const {
      nextUrl: { pathname },
      nextauth: { token },
    } = req

    const i18nRouterResponse = i18nRouter(req, i18nConfig)

    const redirect = (url: string, targetPath: string) => {
      const newUrl = new URL(url)

      if (newUrl.pathname === targetPath) return i18nRouterResponse
      const locale = getLocaleFromPath(newUrl.pathname)
      const redirectUrl = new URL(locale ? `/${locale}${targetPath}` : targetPath, url)

      return NextResponse.redirect(redirectUrl)
    }

    const { user, apiToken } = token ?? {}
    const isAuthenticated = !!user

    if (pathname === '/') {
      return i18nRouterResponse
    }

    if (isProtectedPage(pathname)) {
      if (!isAuthenticated) {
        if (isVendorPage(pathname)) return redirect(req.url, '/vendor/sign-in')
        return redirect(req.url, '/sign-in')
      }

      if (apiToken) {
        const { exp: accessTokenExpires } = jwtDecode<JWT>(apiToken)
        const currentUnixTimestamp = Math.floor(Date.now() / 1000)
        const accessTokenHasExpired = currentUnixTimestamp > accessTokenExpires

        if (accessTokenHasExpired) {
          return redirect(req.url, '/auth/logout')
        }
      }

      return i18nRouterResponse
    }

    if (isAuthenticated) {
      if (user.type === 'vendor') {
        if (isVendorPage(pathname)) {
          if (isAuthenticationPage(pathname)) {
            return redirect(req.url, '/')
          }

          if (req.url === '/vendor/authorize') {
            return redirect(req.url, '/')
          }
        } else if (isAuthenticationPage(pathname) || isCustomerPage(pathname)) {
          return redirect(req.url, '/')
        }
      }

      if (user.type === 'user') {
        if (isVendorPage(pathname)) {
          return redirect(req.url, '/')
        }

        if (isAuthenticationPage(pathname) || isCustomerPage(pathname)) {
          const isEmailVerified = user.emailVerified

          if (!isEmailVerified) {
            return redirect(req.url, '/sign-up/verify-email')
          }

          if (pathname === '/sign-up') {
            return redirect(req.url, '/')
          }

          if (!pathname.startsWith('/sign-up') && isAuthenticationPage(pathname)) {
            return redirect(req.url, '/')
          }

          if (req.url === '/authorize') {
            return redirect(req.url, '/')
          }
        }
      }
    } else if (pathname === '/sign-up/verify-email') {
      return redirect(req.url, '/sign-in')
    }

    return i18nRouterResponse
  },
  {
    callbacks: {
      authorized: () => {
        return true
      },
    },
  },
)

// only applies this middleware to files in the app directory
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
}
