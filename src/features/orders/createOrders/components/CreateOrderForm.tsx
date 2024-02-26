'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Stack } from '@mui/material'
import { useSession } from 'next-auth/react'
import { FormProvider, useForm } from 'react-hook-form'

import {
  CheckoutFormTemplate,
  CheckoutOrderModel,
  CheckoutOrderSummaryModel,
  createCheckoutOrders,
} from '~/entities/orders'

import { useRouter } from '~/shared/hooks/useRouter'
import { showErrorToast } from '~/shared/services/toastr'

import { CreateOrdersFormSchema, CreateOrdersFormValues, mapFormSchemaToRequest } from '../model'

import { OrderBox } from './OrderBox'
import { OrderSummary } from './OrderSummary'

interface Props {
  orderSummary: CheckoutOrderSummaryModel
  orders: CheckoutOrderModel[]
}

export const CreateOrderForm = ({ orderSummary, orders }: Props) => {
  const router = useRouter()
  const session = useSession()
  const userData = session.data?.user ?? null

  const methods = useForm<CreateOrdersFormValues>({
    defaultValues: {
      contactInformation: {
        fullName: userData?.fullName ?? '',
        phone: '',
        email: userData?.email ?? '',
      },
      shippingInformation: {
        country: '',
        city: '',
        address: '',
      },
    },
    resolver: zodResolver(CreateOrdersFormSchema),
  })
  const { handleSubmit: onSubmit } = methods

  const handleSubmit = onSubmit(async (values: CreateOrdersFormValues) => {
    try {
      const dto = mapFormSchemaToRequest(values)
      await createCheckoutOrders(dto, { authorizeToken: session.data?.apiToken })

      router.push('/checkout/success')
    } catch (err) {
      showErrorToast(String(err))
      router.push('/cart')
    }
  })

  return (
    <Stack flexDirection={{ xs: 'column', lg: 'row' }} mt={3} gap={3}>
      <FormProvider {...methods}>
        <Stack gap={{ xs: 2, md: 4 }} width="100%">
          <CheckoutFormTemplate />
          {orders.map(({ orderItems, id }, idx) => (
            <OrderBox key={id} orderNumber={idx + 1} orders={orderItems} />
          ))}
        </Stack>
        <OrderSummary data={orderSummary} onSubmit={handleSubmit} />
      </FormProvider>
    </Stack>
  )
}
