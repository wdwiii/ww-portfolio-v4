import { AppBar, CssBaseline, Toolbar } from '@mui/material'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import HideOnScroll from './components/navigation/HideOnScroll'
import NavBar from './components/navigation/NavBar'
import ThemeRegistry from './components/theme/ThemeRegistry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'williewhitfield.com',
  description:
    'Portfolio application developed by Willie Whitfield, powered by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <CssBaseline />
      <ThemeRegistry>
        <html lang='en' style={{ height: '100%' }}>
          <body
            className={inter.className}
            style={{
              height: '100%',
            }}
          >
            <HideOnScroll>
              <AppBar color='transparent' elevation={0} sx={{ py: 5 }}>
                <Toolbar>
                  <NavBar />
                </Toolbar>
              </AppBar>
            </HideOnScroll>
            <NavBar sx={{ display: 'none' }} />
            {children}
          </body>
        </html>
      </ThemeRegistry>
    </>
  )
}
