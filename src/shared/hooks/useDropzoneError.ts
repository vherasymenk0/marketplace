import { useEffect, useState } from 'react'

const useDropzoneError = (error?: string | null) => {
  const [dropError, setDropError] = useState<string>()
  const [validateError, setValidateError] = useState<string | null>()

  const isError = !!validateError || !!dropError
  const errorMessage = dropError ?? validateError ?? error

  const onDropError = (err?: string) => setDropError(err)

  const handleSetError = (errorMsg: string | null) => {
    setValidateError(errorMsg)
  }

  useEffect(() => {
    if (error) {
      setDropError(undefined)
      handleSetError(null)
    }
  }, [error])

  return { isError, errorMessage, onDropError, handleSetError }
}

export default useDropzoneError
