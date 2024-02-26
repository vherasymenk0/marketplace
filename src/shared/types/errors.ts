export interface ErrorSchema {
  errors:
    | Record<string, string>
    | {
        _base?: string
      }
}
