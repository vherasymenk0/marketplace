'use client'

import { signOut } from 'next-auth/react'
import { useEffect } from 'react'

const Page = () => {
  useEffect(() => {
    void signOut({ redirect: true, callbackUrl: '/sign-in' })
  }, [])
  return <></>
}

export default Page
