import { RefinementCtx } from 'zod'

export const validatePassword = (value: string, context: RefinementCtx) => {
  const isMinLength = value.length >= 8
  const isAnyLowercaseLetter = /[a-z]/.test(value)
  const isAnyUppercaseLetter = /[A-Z]/.test(value)
  const isAnyNumber = /\d/.test(value)
  const isAnySpecialCharacter = /[^a-zA-Z0-9]/.test(value)

  if (!isMinLength) {
    context.addIssue({
      code: 'too_small',
      minimum: 8,
      type: 'string',
      inclusive: true,
      message: 'Required min 8 symbols',
    })
  }

  if (!isAnyNumber) {
    context.addIssue({
      code: 'custom',
      message: 'Required at least one number',
    })
  }

  if (!isAnyLowercaseLetter) {
    context.addIssue({
      code: 'custom',
      message: 'Required at least one lowercase letter',
    })
  }

  if (!isAnyUppercaseLetter) {
    context.addIssue({
      code: 'custom',
      message: 'Required at least one uppercase letter',
    })
  }

  if (!isAnySpecialCharacter) {
    context.addIssue({
      code: 'custom',
      message: 'Required at least one special character',
    })
  }
}
