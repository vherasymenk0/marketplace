import { Box } from '@mui/material'
import { ReactNode, memo } from 'react'

import { CurrenciesContext } from '~/features/currency'

import { getCategories } from '~/entities/category'
import { getCurrencies } from '~/entities/currency'

import { CategoriesContext, SidebarContext, SignInHeaderModalContext } from '../lib/context'

import { Footer } from './Footer'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

interface MainLayoutProps {
  children: ReactNode
}

const LayoutView = memo(async ({ children }: MainLayoutProps) => {
  const categories = await getCategories({ cache: 'no-store' })
  const currencies = await getCurrencies({ cache: 'no-store' })

  return (
    <CategoriesContext categories={categories}>
      <CurrenciesContext currencies={currencies}>
        <SidebarContext>
          <SignInHeaderModalContext>
            <Header />
            <Sidebar />
          </SignInHeaderModalContext>
        </SidebarContext>
      </CurrenciesContext>

      <Box component="main" display="flex" flexDirection="column">
        {children}
      </Box>

      <Footer />
    </CategoriesContext>
  )
})

export const MainLayout = ({ children }: MainLayoutProps) => {
  return <LayoutView>{children}</LayoutView>
}
