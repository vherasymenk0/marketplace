'use client'

import { startTransition, useEffect } from 'react'

import { ErrorPageView } from 'src/views/errorPageView'

interface Props {
  error: Error & { digest?: string }
  reset: () => void
}

const ErrorPage = ({ error, reset }: Props) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  const handleReset = (href = '/') => {
    window.location.href = href
    startTransition(() => reset())
  }

  return <ErrorPageView onResetError={handleReset} />
}

export default ErrorPage
