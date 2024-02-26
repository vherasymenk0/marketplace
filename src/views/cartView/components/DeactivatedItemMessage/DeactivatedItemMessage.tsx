import { Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import TriangleIcon from '~/shared/assets/icons/triangle-warning.svg'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'

import { useStyles } from './DeactivatedItemMessage.styles'

export const DeactivatedItemMessage = () => {
  const styles = useStyles()

  return (
    <Stack sx={styles.root}>
      <SvgIcon icon={TriangleIcon} stroke="warning.main" size={32} />
      <Text variant="subtitle3" color="warning.main">
        <FormattedMessage
          id="cart.deactivated.text"
          defaultMessage="The product is currently deactivated. Please remove Deactivated products to proceed to Checkout."
        />
      </Text>
    </Stack>
  )
}
