import { NextLink } from '~/shared/components/base/NextLink'

interface Props {
  children: React.JSX.Element
  href: string
  disabled?: boolean
}

export const CardLinkWrapper = ({ children, href, disabled }: Props) => {
  if (disabled) return <>{children}</>

  return (
    <NextLink href={href} passHref noLinkStyle>
      {children}
    </NextLink>
  )
}
