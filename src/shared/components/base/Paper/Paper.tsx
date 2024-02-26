import { Stack, SxProps } from '@mui/material'
import { PropsWithChildren } from 'react'

import { useStyles } from './Paper.styles'

interface Props extends PropsWithChildren {
  sx?: SxProps
}

export const Paper = ({ sx, children }: Props) => {
  const styles = useStyles({ sx })

  return <Stack sx={styles.paper}>{children}</Stack>
}
