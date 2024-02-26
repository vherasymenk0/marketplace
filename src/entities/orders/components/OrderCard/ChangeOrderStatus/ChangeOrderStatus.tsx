import { Divider, IconButton, List, ListItem, Stack, Tooltip } from '@mui/material'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import InfoIcon from '~/shared/assets/icons/info-thin.svg'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'
import { SelectField } from '~/shared/components/fields/SelectField'
import { useRouter } from '~/shared/hooks/useRouter'

import { changeOrderStatus } from '../../../api'
import { STATUS_OPTIONS } from '../../../lib/data/order'
import { ChangeOrderStatusSchemaRequest, OrderModel } from '../../../model/order'

import { useStyles } from './ChangeOrderStatus.styles'

interface Props {
  status: OrderModel['status']
  id: OrderModel['id']
}

const TooltipText = () => {
  const styles = useStyles()

  return (
    <Stack gap={0.5}>
      <Text variant="body6">
        <FormattedMessage
          defaultMessage="Manage your orders"
          id="ordersPage.orderCard.changeStatus.tooltip.title"
        />

        <List sx={{ listStyle: 'decimal', pl: 2 }}>
          <ListItem sx={styles.tooltipItem}>
            <FormattedMessage
              defaultMessage='Click on the "Status" dropdown to reveal a list of status options'
              id="ordersPage.orderCard.changeStatus.tooltip.title"
            />
          </ListItem>
          <ListItem sx={styles.tooltipItem}>
            <FormattedMessage
              defaultMessage="Choose the appropriate status from the dropdown that reflects the current progress or situation of the order"
              id="ordersPage.orderCard.changeStatus.tooltip.title"
            />
          </ListItem>
          <ListItem sx={styles.tooltipItem}>
            <FormattedMessage
              defaultMessage="Repeat these steps for other orders as needed to effectively organize and prioritize your tasks."
              id="ordersPage.orderCard.changeStatus.tooltip.title"
            />
          </ListItem>
        </List>
      </Text>
    </Stack>
  )
}

export const ChangeOrderStatus = ({ status, id }: Props) => {
  const session = useSession()
  const router = useRouter()

  const methods = useForm({ defaultValues: { status } })

  const { watch } = methods
  const selectedStatus = watch('status')

  useEffect(() => {
    const updateStatus = async () => {
      const dto = ChangeOrderStatusSchemaRequest.parse({ order: { status: selectedStatus } })
      await changeOrderStatus(id, dto, { authorizeToken: session.data?.apiToken })

      router.refresh()
    }

    if (selectedStatus !== status) {
      updateStatus().catch(console.error)
    }
  }, [selectedStatus])

  return (
    <FormProvider {...methods}>
      <Divider />

      <Stack gap={2}>
        <Stack direction="row" gap={1}>
          <Text variant="subtitle2" color="grey.900">
            <FormattedMessage
              defaultMessage="Order Status"
              id="ordersPage.orderCard.changeStatus.title"
            />
          </Text>

          <Tooltip title={<TooltipText />} arrow placement="bottom-start">
            <IconButton disableRipple sx={{ p: 0 }}>
              <SvgIcon icon={InfoIcon} />
            </IconButton>
          </Tooltip>
        </Stack>

        <SelectField
          name="status"
          options={STATUS_OPTIONS}
          sx={{ width: { xs: '100%', md: 254 } }}
        />
      </Stack>
    </FormProvider>
  )
}
