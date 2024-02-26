import { Attachment } from '../model/validation'

export const getIdFromAttachmentString = (value: string) => {
  const regex = /cache\/(.+)/
  const match = regex.exec(value)
  if (match) {
    return match[1]
  }
  return null
}

export const updateAttachmentsWithDeletions = (
  currentFiles: Attachment[],
  previousFiles: Attachment[],
): Attachment[] => {
  const files = currentFiles.map((file, index) => ({
    ...file,
    position: index,
  }))

  const currentIds = new Set(currentFiles.map((file) => file.id))

  previousFiles.forEach((file) => {
    if (!currentIds.has(file.id)) {
      files.push({ ...file, position: 0, _destroy: true })
    }
  })

  return files
}

export const sortByPosition = <TFiles extends { position: number }[]>(files: TFiles): TFiles => {
  return files.sort((a, b) => (a.position ?? 1) - (b.position ?? 1))
}
