import { AppBar, Toolbar } from '@mui/material'
import type { Metadata } from 'next'
import HideOnScroll from './components/navigation/HideOnScroll'
import NavBar from './components/navigation/NavBar'
import ThemeRegistry from './components/theme/ThemeRegistry'
import Footer from './components/ui/Footer'
import ThemeBackgroundImage from './components/ui/ThemeBackgroundImage'

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
      <ThemeRegistry>
        <html lang='en'>
          <body>
            <ThemeBackgroundImage>
              <HideOnScroll>
                <AppBar color='transparent' elevation={0} sx={{ py: 4 }}>
                  <Toolbar
                    sx={{
                      justifyContent: 'center',
                    }}
                  >
                    <NavBar />
                  </Toolbar>
                </AppBar>
              </HideOnScroll>
              <NavBar sx={{ display: 'none' }} />
              {children}
              <Footer />
            </ThemeBackgroundImage>
          </body>
        </html>
      </ThemeRegistry>
    </>
  )
}
