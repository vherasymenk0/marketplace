import { Divider } from '@mui/material'

import { Text } from '~/shared/components/base/Text'

interface Props {
  title: string
  withDivider?: boolean
  children: React.ReactNode
}

export const CardContainer = ({ title, withDivider = true, children }: Props) => {
  return (
    <>
      <Text variant="subtitle1" color="primary" mb={3}>
        {title}
      </Text>

      {withDivider ? <Divider sx={{ mb: 3 }} /> : null}
      {children}
    </>
  )
}
