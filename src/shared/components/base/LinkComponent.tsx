import Link from 'next/link'
import { Ref, forwardRef } from 'react'

export const LinkComponent = forwardRef(
  (props: { href: string }, ref: Ref<HTMLAnchorElement> | undefined) => (
    <Link ref={ref} {...props} prefetch />
  ),
)
