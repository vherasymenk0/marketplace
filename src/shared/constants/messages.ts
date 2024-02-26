export const REQUIRED = 'Required'
export const PASSWORD_HELPER_MESSAGE =
  'Required min 8 symbols incl Lowercase, Uppercase, Number, Special Character'

export const maxLength = (maxCharacters = 50) => `Should be ${maxCharacters} characters or less`
export const minLength = (minCharacters = 1) => `Should be ${minCharacters} characters or more`
