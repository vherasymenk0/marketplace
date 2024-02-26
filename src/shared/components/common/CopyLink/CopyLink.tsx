import { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'

import CopyIcon from '~/shared/assets/icons/copy-icon.svg'

import { SvgIcon } from '../../base/SvgIcon'
import { Text } from '../../base/Text'

export const CopyLink = () => {
  const [isCopied, setIsCopied] = useState(false)

  const onCopy = async () => {
    await navigator.clipboard.writeText(window.location.href)

    setIsCopied(true)
  }

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    }
  }, [isCopied])

  if (isCopied)
    return (
      <Text variant="body4" color="success.main">
        <FormattedMessage defaultMessage="Link Copied!" id="common.copyLink.copied" />
      </Text>
    )

  return (
    <Text
      variant="body4"
      color="primary.main"
      onClick={onCopy}
      sx={{ display: 'flex', gap: 1, cursor: 'pointer', width: 'max-content' }}
    >
      <SvgIcon icon={CopyIcon} />
      <FormattedMessage defaultMessage="Copy Link" id="common.copyLink" />
    </Text>
  )
}
