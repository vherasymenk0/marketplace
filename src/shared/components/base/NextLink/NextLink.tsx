'use client'

import { Link as CustomLink, LinkProps as MuiLinkProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import clsx from 'clsx'
import NextLinkBase, { LinkProps as NextLinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { AnchorHTMLAttributes, ReactNode, forwardRef } from 'react'

// Add support for the sx prop for consistency with the other branches.
const Anchor = styled('a')({})

type NextLinkComposedProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
  Omit<NextLinkProps, 'href' | 'as' | 'onClick' | 'onMouseEnter' | 'onTouchStart'> & {
    to: NextLinkProps['href']
    linkAs?: NextLinkProps['as']
    startIcon?: ReactNode
    endIcon?: ReactNode
    isLoading?: boolean
  }

export const NextLinkComposed = forwardRef<HTMLAnchorElement, NextLinkComposedProps>(
  (props, ref) => {
    const {
      to,
      linkAs,
      replace,
      scroll,
      shallow,
      prefetch,
      legacyBehavior = true,
      locale,
      ...other
    } = props

    return (
      <NextLinkBase
        href={to}
        prefetch={prefetch}
        as={linkAs}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        passHref
        locale={locale}
        legacyBehavior={legacyBehavior}
      >
        <Anchor ref={ref} {...other} />
      </NextLinkBase>
    )
  },
)

export type LinkProps = {
  activeClassName?: string
  as?: NextLinkProps['as']
  href: NextLinkProps['href']
  linkAs?: NextLinkProps['as'] // Useful when the as prop is shallow by styled().
  noLinkStyle?: boolean
  sx?: MuiLinkProps['sx']
} & Omit<NextLinkComposedProps, 'to' | 'linkAs' | 'href'>

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/api-reference/next/link
export const NextLink = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const {
    activeClassName = 'active',
    as,
    className: classNameProps,
    href,
    legacyBehavior,
    linkAs: linkAsProp,
    locale,
    noLinkStyle,
    prefetch,
    replace,
    scroll,
    shallow,
    isLoading,
    ...other
  } = props

  const routerPathname = usePathname()
  const pathname = typeof href === 'string' ? href : href.pathname
  const isActiveClassName = routerPathname === pathname && activeClassName
  const className = [
    classNameProps,
    isActiveClassName ? activeClassName : '',
    isLoading ? 'loading' : '',
  ].join(' ')

  const isExternal =
    typeof href === 'string' && (href.startsWith('http') || href.startsWith('mailto:'))

  if (isExternal) {
    if (noLinkStyle) {
      return (
        <Anchor
          className={clsx(className, { native: noLinkStyle })}
          href={href}
          ref={ref}
          {...other}
        />
      )
    }

    return <CustomLink className={className} href={href} ref={ref} {...other} />
  }

  const linkAs = linkAsProp ?? as
  const nextjsProps = {
    to: href,
    linkAs,
    replace,
    scroll,
    shallow,
    prefetch,
    legacyBehavior,
    locale,
    isLoading,
  }

  if (noLinkStyle) {
    return (
      <NextLinkComposed
        className={className}
        ref={ref}
        {...nextjsProps}
        style={{
          textDecoration: 'none',
        }}
        {...other}
      />
    )
  }

  return (
    <CustomLink
      component={NextLinkComposed}
      className={className}
      ref={ref}
      {...nextjsProps}
      {...other}
    />
  )
})
