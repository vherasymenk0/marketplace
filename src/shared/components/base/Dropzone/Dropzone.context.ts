import { createContext, useContext } from 'react'

import { DropzoneContext } from './Dropzone.types'

const dropzoneContext = createContext<DropzoneContext>({} as DropzoneContext)

export const DropzoneContextProvider = dropzoneContext.Provider

export const useDropzoneContext = () => useContext(dropzoneContext)
