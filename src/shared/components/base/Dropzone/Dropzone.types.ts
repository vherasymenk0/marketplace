import { BoxProps } from '@mui/material'

import { FileValue } from '~/shared/services/uploadFile'

export interface DropzoneContext {
  value: FileValue
  multiple: boolean
  isDisabled: boolean
  isUploading: boolean
  isDragActive?: boolean
  deleteFile: (id: string) => void
  changeFilePosition: (value: FileValue) => void
  getRootProps: () => Record<string, unknown>
  getInputProps: () => Partial<React.ReactHTMLElement<HTMLInputElement>>
  onError?: (err?: string | undefined) => void
}

export type DropzoneInputProps = BoxProps & {
  children: React.ReactNode
  isError?: boolean
  inputProps?: React.ReactHTMLElement<HTMLInputElement>
  rootProps?: BoxProps
  dataTestId?: string
}

export type OnValidateErrorType = (errorMessage: string | null) => void
