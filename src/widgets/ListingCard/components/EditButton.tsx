'use client'

import { MouseEventHandler } from 'react'
import { FormattedMessage } from 'react-intl'

import { Button } from '~/shared/components/base/Button'
import { useRouter } from '~/shared/hooks/useRouter'

export const EditButton = ({ id }: { id: number }) => {
  const router = useRouter()

  const handleEditClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    e.stopPropagation()
    router.push(`/vendor/edit-listing/${id}`)
  }

  return (
    <Button sx={{ width: { xs: '100%', md: 184 } }} size="medium" onClick={handleEditClick}>
      <FormattedMessage defaultMessage="Edit" id="listingCard.buttons.edit" />
    </Button>
  )
}
