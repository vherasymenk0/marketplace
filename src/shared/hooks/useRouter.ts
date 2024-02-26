import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useRouter as useNextRouter } from 'next/navigation'
import { useTransition } from 'react'

export const useRouter = () => {
  const router = useNextRouter()
  const [isPending, startTransition] = useTransition()

  const push = (href: string, options?: NavigateOptions) =>
    startTransition(() => {
      router.push(href, options)
    })

  return { ...router, push, isPending }
}
