export const getError = async <TError>(call: () => unknown): Promise<TError> => {
  try {
    await call()

    throw new Error('no intended error')
  } catch (error: unknown) {
    return error as TError
  }
}
