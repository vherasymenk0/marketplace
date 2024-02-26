import { z } from 'zod'

export const FileModelSchema = z.object({
  id: z.string().or(z.number()),
  url: z.string(),
  name: z.string().optional(),
  size: z.number().optional(),
  loading: z.boolean().optional(),
  error: z.string().optional(),
  loaded: z.boolean().optional(),
  payload: z.record(z.string(), z.string()).optional(),
  file: z.custom<File>().optional(),
})

export type FileModel = z.infer<typeof FileModelSchema>

export type FileValue = FileModel | FileModel[] | null

export interface UploadFile {
  file: File
  error?: string
}
