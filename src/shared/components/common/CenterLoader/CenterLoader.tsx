import { CircularProgress, Stack } from '@mui/material'

import { useStyles } from './CenterLoader.styles'

export const CenterLoader = () => {
  const styles = useStyles()

  return (
    <Stack sx={styles.root}>
      <CircularProgress size={80} />
    </Stack>
  )
}
