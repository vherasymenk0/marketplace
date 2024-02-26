export const checkIsFilledPhoneNumber = (value?: string) => {
  const PHONE_NUMBER_LENGTH = 8

  return value?.length === PHONE_NUMBER_LENGTH
}
