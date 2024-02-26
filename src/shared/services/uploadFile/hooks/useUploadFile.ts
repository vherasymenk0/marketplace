'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import { isOfType } from '~/shared/helpers/isOfType'
import { useEffectOnUpdate } from '~/shared/hooks/useEffectOnUpdate'

import { generateId, getUrlFromFile } from '../lib/utils'
import { FileModel, FileValue, UploadFile } from '../model/model'

export interface UseUploadFile<TData> {
  value: FileValue
  multiple?: boolean
  maxFiles?: number
  onChange: (value: FileValue) => void
  onUpload: (value: WithRequired<FileModel, 'file'>) => Promise<TData>
  onSuccess?: () => void
  onError?: (err?: string) => void
  onUploading?: (processing: boolean) => void
  deleteFileOnError?: boolean
}

const getDefaultValue = (value: FileValue, multiple: boolean) => {
  if (multiple) return value ?? []

  return value ?? null
}

export const useUploadFile = <TData>({
  value,
  multiple = false,
  deleteFileOnError,
  maxFiles,
  onChange,
  onUpload,
  onSuccess,
  onError,
  onUploading,
}: UseUploadFile<TData>) => {
  const initialized = useRef(false)
  const [isUploading, setUploading] = useState<boolean>(false)
  const [files, setFiles] = useState<FileValue>(getDefaultValue(value, multiple))
  const filesRef = useRef<FileValue>(null)
  const isDirty = useRef(false)

  filesRef.current = files

  const isFilesArray = isOfType.array(files)
  const isValueArray = isOfType.array(value)
  const isEmptyFile = isFilesArray ? !files?.length : !files
  const isEmptyValue = isValueArray ? !value.length : !value
  const canInitialize = isEmptyFile && !isEmptyValue && !initialized.current

  // Initialize
  useEffect(() => {
    if (canInitialize) {
      initialized.current = true
      setFiles(getDefaultValue(value, multiple))
    }
  }, [value, canInitialize, multiple])

  // Update form
  useEffect(() => {
    if (!isUploading && isDirty.current) {
      onChange(files ?? null)
    }
  }, [isUploading, files])

  useEffectOnUpdate(() => {
    if (onUploading) {
      onUploading(isUploading)
    }
  }, [isUploading])

  const changeFilePosition = useCallback((newFiles: FileValue) => {
    isDirty.current = true

    setFiles(newFiles)
  }, [])

  const addFiles = useCallback((addedFiles: FileModel[]) => {
    isDirty.current = true

    setFiles((state) => {
      if (isOfType.array(state)) {
        return [...state, ...addedFiles]
      }

      return state
    })
  }, [])

  const updateFile = useCallback((id: string | number, data: Partial<FileModel>) => {
    isDirty.current = true

    setFiles((state) => {
      if (isOfType.array(state)) {
        return state.map((file) => {
          if (String(file.id) === String(id)) {
            return {
              ...file,
              ...data,
              ...(data.payload?.url && { url: data.payload.url }),
            }
          }

          return file
        })
      }

      if (!state) return state

      return { ...state, ...data }
    })
  }, [])

  const deleteFile = useCallback((id?: string | number) => {
    isDirty.current = true
    initialized.current = true

    setFiles((state) => {
      if (isOfType.array(state)) {
        return state.filter((file) => String(file.id) !== String(id))
      }

      return null
    })
  }, [])

  const getFileCount = useCallback(
    () => (isOfType.array(filesRef.current) ? filesRef.current.length : 0),
    [],
  )

  const uploadFiles = useCallback(
    async (uploadedFiles: UploadFile[]) => {
      try {
        initialized.current = true
        setUploading(true)

        const acceptedFiles: WithRequired<FileModel, 'file'>[] = []

        uploadedFiles.forEach(({ file }) => {
          const formattedFile: WithRequired<FileModel, 'file'> = {
            id: generateId(),
            file,
            loading: true,
            name: file.name,
            url: getUrlFromFile(file),
            size: file?.size || 0,
          }

          acceptedFiles.push(formattedFile)
        })

        const uploadFileCallback = async (acceptedFile: WithRequired<FileModel, 'file'>) => {
          try {
            const payload = await onUpload(acceptedFile)

            if (payload) {
              updateFile(String(acceptedFile.id), { loading: false, loaded: true, payload })
            } else {
              throw new Error('Unknown Error')
            }
          } catch (error) {
            if (deleteFileOnError) {
              deleteFile(String(acceptedFile.id))
            } else {
              const errorMessage = String(error) ?? 'Something went wrong....'
              updateFile(String(acceptedFile.id), { loading: false, error: errorMessage })
            }
          }
        }

        if (maxFiles && maxFiles > 0) {
          const fileCount = getFileCount()
          const filesCount = acceptedFiles.length
          const availableSpace = maxFiles - fileCount

          if (availableSpace < filesCount) {
            const deleteCount = filesCount - availableSpace
            acceptedFiles.splice(0, deleteCount)
          }
        }

        // Update state
        if (multiple && isFilesArray) {
          addFiles(acceptedFiles)
        } else if (acceptedFiles.length > 0) {
          const file = acceptedFiles[0]
          if (file) setFiles(file)
        }

        // Upload files
        const promises = acceptedFiles.map((file) => uploadFileCallback(file))
        await Promise.allSettled(promises)

        if (onSuccess) onSuccess()
      } catch (error) {
        if (onError) onError()
        console.error(error)
      } finally {
        setUploading(false)
      }

      return null
    },
    [
      deleteFileOnError,
      multiple,
      isFilesArray,
      maxFiles,
      deleteFile,
      updateFile,
      setFiles,
      addFiles,
      onError,
      onSuccess,
      onUpload,
      getFileCount,
    ],
  )

  return {
    disabled: isUploading,
    isUploading,
    files,
    uploadFiles,
    deleteFile,
    changeFilePosition,
  }
}
