import { Box, Stack } from '@mui/material'
import { MouseEvent, useState } from 'react'
import { FormattedMessage } from 'react-intl'

import ArrowDown from '~/shared/assets/icons/arrow-down.svg'
import { InlineTextButton } from '~/shared/components/base/InlineTextButton'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'

import { AdditionalInfo } from '../AdditionalInfo'

import { useStyles } from './ListingCardAccordion.styles'

interface Props {
  description: string | null
  originCountry: string
  brand: string
  partNumber: string
  partType: string
}

export const ListingCardAccordion = ({
  description,
  brand,
  originCountry,
  partNumber,
  partType,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const styles = useStyles({ isOpen })

  const onSummaryClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.stopPropagation()
    e.preventDefault()

    setIsOpen((prev) => !prev)
  }

  return (
    <Stack>
      <Box sx={styles.content}>
        <AdditionalInfo
          description={description}
          originCountry={originCountry}
          brand={brand}
          partNumber={partNumber}
          partType={partType}
        />
      </Box>

      <InlineTextButton sx={styles.summary} onClick={onSummaryClick}>
        <Text variant="subtitle4">
          {isOpen ? (
            <FormattedMessage defaultMessage="Close" id="listingCard.accordion.close" />
          ) : (
            <FormattedMessage defaultMessage="Show more" id="listingCard.accordion.showMore" />
          )}
        </Text>

        <SvgIcon icon={ArrowDown} size={20} />
      </InlineTextButton>
    </Stack>
  )
}
