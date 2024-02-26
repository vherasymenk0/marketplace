'use client'

import { useRouter } from 'next/navigation'
import { FormattedMessage } from 'react-intl'

import BackArrowIcon from '~/shared/assets/icons/arrow-left.svg'

import { Button, ButtonProps } from '../../base/Button'
import { SvgIcon } from '../../base/SvgIcon'
import { Text } from '../../base/Text'

import { useStyles } from './BackButton.styles'

interface BackButtonProps {
  sx?: ButtonProps['sx']
  href?: string
}

export const BackButton = ({ href, sx }: BackButtonProps) => {
  const styles = useStyles({ sx })
  const router = useRouter()

  const handleClick = () => {
    if (href) {
      router.push(href)
    } else {
      router.back()
    }
  }

  return (
    <Button
      variant="text"
      size="small"
      startIcon={<SvgIcon icon={BackArrowIcon} size={32} />}
      sx={styles.root}
      onClick={handleClick}
    >
      <Text variant="body4" color="grey.600">
        <FormattedMessage defaultMessage="Back" id="common.back" />
      </Text>
    </Button>
  )
}
