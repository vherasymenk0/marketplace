'use client'

import { useEffect, useState } from 'react'

import { Cookies } from '~/shared/services/cookies'

export const useCookieConsent = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(false)
  const cookieConsent = Cookies.get('cookie_consent')

  useEffect(() => {
    if (!cookieConsent) {
      setShowCookieBanner(true)
    }
  }, [])

  const handleAccept = () => {
    Cookies.set('cookie_consent', 'all')
    setShowCookieBanner(false)
  }

  const handleDecline = () => {
    Cookies.set('cookie_consent', 'essential')
    setShowCookieBanner(false)
  }

  return { showCookieBanner, handleAccept, handleDecline }
}
