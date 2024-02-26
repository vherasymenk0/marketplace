import { RefinementCtx, z } from 'zod'

import * as messages from '~/shared/constants/messages'

export const validateDate = (value: string | null, context: RefinementCtx) => {
  if (!value) {
    context.addIssue({
      code: 'custom',
      message: messages.REQUIRED,
    })
  }

  const isValidDate = z.string().datetime({ offset: true }).safeParse(value).success
  if (!isValidDate) {
    context.addIssue({
      code: 'custom',
      message: 'Invalid date',
    })
  }
}
