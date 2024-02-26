'use client'

import { Stack } from '@mui/material'

import { CSSHide } from '~/shared/components/base/CSSHide'
import { BasicCard } from '~/shared/components/cards/BasicCard'
import { useBoolean } from '~/shared/hooks/useBoolean'

import { OrderModel } from '../../model/order'

import { AccordionButton } from './AccordionButton'
import { AdditionalInformation } from './AdditionalInformation'
import { MainInformation } from './MainInformation'
import { StatusIndicator } from './StatusIndicator'

interface Props extends Omit<OrderModel, 'shippingInformation'> {
  isVendor?: boolean
  shippingInformation?: string
}

export const OrderCard = ({
  id,
  createdAt,
  orderItems,
  status,
  totalPrice,
  totalShippingCost,
  shippingInformation,
  isVendor = false,
  contactInformations,
}: Props) => {
  const [isOpen, { toggle }] = useBoolean(false)

  return (
    <BasicCard>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', md: 'center' }}
      >
        <Stack direction="row" gap={3}>
          <StatusIndicator status={status} />

          <MainInformation
            id={id}
            status={status}
            totalPrice={totalPrice}
            totalShippingCost={totalShippingCost}
            createdAt={createdAt}
            contactInformations={contactInformations}
          />
        </Stack>

        <CSSHide screen="mobile">
          <AccordionButton isOpen={isOpen} onClick={toggle} />
        </CSSHide>
      </Stack>

      {isOpen ? (
        <AdditionalInformation
          contactInformations={contactInformations}
          orderItems={orderItems}
          isVendor={isVendor}
          status={status}
          shippingInformation={shippingInformation}
          id={id}
        />
      ) : null}

      <CSSHide screen="desktop">
        <AccordionButton isOpen={isOpen} onClick={toggle} />
      </CSSHide>
    </BasicCard>
  )
}
