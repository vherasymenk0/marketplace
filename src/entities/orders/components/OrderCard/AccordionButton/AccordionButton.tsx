import { FormattedMessage } from 'react-intl'

import ArrowDown from '~/shared/assets/icons/arrow-down.svg'
import { InlineTextButton } from '~/shared/components/base/InlineTextButton'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'

import { useStyles } from './AccordionButton.styles'

interface Props {
  onClick: () => void
  isOpen: boolean
}

export const AccordionButton = ({ onClick, isOpen }: Props) => {
  const styles = useStyles({ isOpen })

  return (
    <InlineTextButton
      color="primary"
      onClick={onClick}
      endIcon={<SvgIcon icon={ArrowDown} size={12} />}
      sx={styles.accordionButton}
    >
      {isOpen ? (
        <Text variant="button2">
          <FormattedMessage defaultMessage="Close" id="ordersPage.orderCard.close" />
        </Text>
      ) : (
        <Text variant="button2">
          <FormattedMessage defaultMessage="Open" id="ordersPage.orderCard.open" />
        </Text>
      )}
    </InlineTextButton>
  )
}
