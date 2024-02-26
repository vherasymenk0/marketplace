import { Alert, AlertTitle, Snackbar, Typography } from '@mui/material'

import useNetwork from '~/shared/hooks/useNetwork'

export const OfflineNotification = () => {
  const { isOffline, onClose } = useNetwork()

  if (!isOffline) return <></>

  return (
    <Snackbar
      open={isOffline}
      autoHideDuration={isOffline ? null : 1000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert variant="filled" severity="error" onClose={onClose}>
        <AlertTitle>Whoops! No Internet Connection</AlertTitle>
        <Typography variant="body2">
          Some parts of this app may be unavailable until you come back online.
        </Typography>
      </Alert>
    </Snackbar>
  )
}
