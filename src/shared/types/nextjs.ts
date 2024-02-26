export interface ServerComponentProps<Params = { slug: string }> {
  params: Params
  searchParams?: Record<string, string | string[] | undefined>
}
