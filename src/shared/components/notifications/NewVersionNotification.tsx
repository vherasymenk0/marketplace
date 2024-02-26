import { Alert, Button, Snackbar } from '@mui/material'
import { useEffect, useState } from 'react'

declare global {
  interface Window {
    workbox: {
      addEventListener: (arg0: string, arg1: () => void) => void
      messageSW: (arg0: { type: string }) => void
      register: () => void
    }
  }
}

export const NewVersionNotification = () => {
  const [showReload, setShowReload] = useState(false)

  const reloadPage = (): void => {
    const wb = window.workbox

    wb.addEventListener('controlling', () => {
      window.location.reload()
    })

    setShowReload(false)

    wb.messageSW({ type: 'SKIP_WAITING' })
  }

  useEffect(() => {
    const wb = window.workbox

    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && wb !== undefined) {
      const promptNewVersionAvailable = (): void => {
        setShowReload(true)
      }

      wb.addEventListener('waiting', promptNewVersionAvailable)
      wb.addEventListener('externalwaiting', promptNewVersionAvailable)

      wb.register()
    }
  }, [])

  return (
    <Snackbar
      open={showReload}
      onClick={reloadPage}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        variant="filled"
        action={
          <Button variant="text" size="small" onClick={reloadPage}>
            Reload
          </Button>
        }
      >
        A new version is available!
      </Alert>
    </Snackbar>
  )
}
