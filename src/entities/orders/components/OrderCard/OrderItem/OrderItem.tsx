import { CSSHide } from '~/shared/components/base/CSSHide'

import { OrderItemModel } from '../../../model/order'

import { OrderItemDesktop } from './OrderItemDesktop'
import { OrderItemMobile } from './OrderItemMobile'

interface Props {
  orderItem: OrderItemModel
  isAllowLeaveReview: boolean
}

export const OrderItem = ({ orderItem, isAllowLeaveReview }: Props) => {
  return (
    <>
      <CSSHide screen="mobile">
        <OrderItemDesktop orderItem={orderItem} isAllowLeaveReview={isAllowLeaveReview} />
      </CSSHide>

      <CSSHide screen="desktop">
        <OrderItemMobile orderItem={orderItem} isAllowLeaveReview={isAllowLeaveReview} />
      </CSSHide>
    </>
  )
}
