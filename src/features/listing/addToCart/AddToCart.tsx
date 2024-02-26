import { Stack } from '@mui/material'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'

import { useCartActions } from '~/features/cart'

import { ListingModel } from '~/entities/listing'

import CartIcon from '~/shared/assets/icons/cart.svg'
import { Button, ButtonProps } from '~/shared/components/base/Button'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { CounterField } from '~/shared/components/fields/CounterField '
import { showSuccessToast } from '~/shared/services/toastr'

interface Props {
  id: ListingModel['id']
  withCounter?: boolean
  buttonProps?: ButtonProps
}

export const AddToCart = ({ id, withCounter = true, buttonProps }: Props) => {
  const [isAdded, setIsAdded] = useState(false)
  const { addToCart } = useCartActions()
  const session = useSession()
  const isVendor = session.data?.user.type === 'vendor'

  const intl = useIntl()
  const methods = useForm({ defaultValues: { quantity: 1 } })

  const {
    formState: { isSubmitting },
    handleSubmit: onSubmit,
  } = methods

  const isPending = isSubmitting

  const successMessage = intl.formatMessage({
    id: 'addToCart.toast.success',
    defaultMessage: 'Product was added to the cart! ',
  })

  const onSuccess = () => {
    setIsAdded(true)
    showSuccessToast(successMessage)
  }

  useEffect(() => {
    if (isAdded) {
      setTimeout(() => {
        setIsAdded(false)
      }, 2000)
    }
  }, [isAdded])

  const handleSubmit = onSubmit(async ({ quantity }) => {
    if (!isAdded) {
      await addToCart.mutateAsync({ listingId: String(id), quantity })

      onSuccess()
    }
  })

  if (isVendor) return null

  return (
    <FormProvider {...methods}>
      <Stack direction="row" gap={2}>
        {withCounter ? (
          <CounterField
            name="quantity"
            sx={{ width: 97 }}
            FormControlProps={{ sx: { minWidth: 'auto' } }}
            min={1}
            max={999}
          />
        ) : null}

        <Button
          startIcon={<SvgIcon size={24} icon={CartIcon} />}
          onClick={async (e) => {
            e.preventDefault()
            e.stopPropagation()

            await handleSubmit()
          }}
          loading={isPending}
          {...(isAdded && { color: 'success' })}
          {...buttonProps}
        >
          <FormattedMessage defaultMessage="Add to Card" id="listingPage.actions.addToCart" />
        </Button>
      </Stack>
    </FormProvider>
  )
}
